import { useState } from 'react'

function TaskItem({
  task,
  onDeleteTask,
  onToggleTask,
  onEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const [editDescription, setEditDescription] = useState(
    task.description,
  )

  function handleSave() {
    if (!editTitle.trim()) {
      return
    }

    onEditTask(task.id, {
      title: editTitle.trim(),
      description: editDescription.trim(),
    })

    setIsEditing(false)
  }

  function handleCancel() {
    setEditTitle(task.title)
    setEditDescription(task.description)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="task-item editing">
        <div className="edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
          />

          <textarea
            rows={3}
            value={editDescription}
            onChange={(event) =>
              setEditDescription(event.target.value)
            }
          />

          <div className="task-actions">
            <button
              className="primary-button small"
              onClick={handleSave}
              type="button"
            >
              Save
            </button>

            <button
              className="secondary-button small"
              onClick={handleCancel}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </li>
    )
  }

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <button
        className="checkbox"
        type="button"
        onClick={() => onToggleTask(task.id)}
        aria-label={
          task.completed
            ? 'Mark task as active'
            : 'Mark task as completed'
        }
      >
        {task.completed ? '✓' : ''}
      </button>

      <div className="task-content">
        <h3>{task.title}</h3>

        {task.description && (
          <p>{task.description}</p>
        )}
      </div>

      <div className="task-actions">
        <button
          className="secondary-button small"
          type="button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>

        <button
          className="danger-button small"
          type="button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem