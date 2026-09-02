import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import TaskFilters from './components/TaskFilters'
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskFromApi,
} from './services/taskService'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Load tasks from backend
  useEffect(() => {
    async function loadTasks() {
      try {
        setLoading(true)
        setError('')

        const data = await getTasks()

        // Newest tasks first
        const sortedTasks = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )

        setTasks(sortedTasks)
      } catch (error) {
        console.error('Failed to load tasks:', error)
        setError('Failed to load tasks. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  // Reload tasks from backend
  async function reloadTasks() {
    try {
      setLoading(true)
      setError('')

      const data = await getTasks()

      // Newest tasks first
      const sortedTasks = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      )

      setTasks(sortedTasks)
    } catch (error) {
      console.error('Failed to load tasks:', error)
      setError('Failed to load tasks. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // CREATE
  async function addTask(taskData) {
    try {
      setError('')

      const newTask = await createTask({
        title: taskData.title,
        description: taskData.description,
        completed: false,
      })

      setTasks((currentTasks) => [newTask, ...currentTasks])
    } catch (error) {
      console.error('Failed to create task:', error)
      setError('Failed to create task. Please try again.')
    }
  }

  // DELETE
  async function deleteTask(taskId) {
    try {
      setError('')

      await deleteTaskFromApi(taskId)

      setTasks((currentTasks) =>
        currentTasks.filter((task) => task.id !== taskId),
      )
    } catch (error) {
      console.error('Failed to delete task:', error)
      setError('Failed to delete task. Please try again.')
    }
  }

  // TOGGLE COMPLETE
  async function toggleTask(taskId) {
    try {
      setError('')

      const task = tasks.find((task) => task.id === taskId)

      if (!task) {
        return
      }

      const updatedTask = await updateTask(taskId, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      })

      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === taskId ? updatedTask : task,
        ),
      )
    } catch (error) {
      console.error('Failed to update task:', error)
      setError('Failed to update task. Please try again.')
    }
  }

  // EDIT
  async function editTask(taskId, updatedData) {
    try {
      setError('')

      const task = tasks.find((task) => task.id === taskId)

      if (!task) {
        return
      }

      const updatedTask = await updateTask(taskId, {
        title: updatedData.title,
        description: updatedData.description,
        completed: task.completed,
      })

      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === taskId ? updatedTask : task,
        ),
      )
    } catch (error) {
      console.error('Failed to edit task:', error)
      setError('Failed to edit task. Please try again.')
    }
  }

  // FILTER + SEARCH
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && !task.completed) ||
      (filter === 'completed' && task.completed)

    const searchText = search.toLowerCase()

    const matchesSearch =
      task.title.toLowerCase().includes(searchText) ||
      task.description.toLowerCase().includes(searchText)

    return matchesFilter && matchesSearch
  })

  return (
    <div className="app">
      <Header />

      <main className="container">
        <TaskForm onAddTask={addTask} />

        <TaskStats tasks={tasks} />

        <TaskFilters
          filter={filter}
          onFilterChange={setFilter}
          search={search}
          onSearchChange={setSearch}
        />

        {loading ? (
          <div className="message">
            Loading tasks...
          </div>
        ) : error ? (
          <div className="message">
            <p>{error}</p>

            <button onClick={reloadTasks}>
              Try Again
            </button>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onDeleteTask={deleteTask}
            onToggleTask={toggleTask}
            onEditTask={editTask}
          />
        )}
      </main>
    </div>
  )
}

export default App