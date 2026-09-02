function TaskStats({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const active = total - completed

  return (
    <section className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Total</span>
        <strong>{total}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Active</span>
        <strong>{active}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Completed</span>
        <strong>{completed}</strong>
      </div>
    </section>
  )
}

export default TaskStats