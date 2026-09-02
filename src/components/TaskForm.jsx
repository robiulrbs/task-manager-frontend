import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
    })

    setTitle('')
    setDescription('')
  }

  return (
    <section className="card task-form">
      <div className="section-heading">
        <div>
          <h2>Add a new task</h2>
          <p>Create something you want to accomplish.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task-title">Title</label>

          <input
            id="task-title"
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={120}
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Description</label>

          <textarea
            id="task-description"
            placeholder="Add some details..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
            maxLength={500}
          />
        </div>

        <button className="primary-button" type="submit">
          + Add Task
        </button>
      </form>
    </section>
  )
}

export default TaskForm