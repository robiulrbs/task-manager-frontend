import TaskItem from './TaskItem'

function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask,
}) {
  return (
    <section className="task-list">
      <div className="section-heading">
        <div>
          <h2>Your Tasks</h2>
          <p>
            {tasks.length === 1
              ? '1 task'
              : `${tasks.length} tasks`}
          </p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">✓</div>
          <h3>No tasks found</h3>
          <p>
            Create a task above and start getting things done.
          </p>
        </div>
      ) : (
        <ul className="tasks">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onToggleTask={onToggleTask}
              onEditTask={onEditTask}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList