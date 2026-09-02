function TaskFilters({
  filter,
  onFilterChange,
  search,
  onSearchChange,
}) {
  return (
    <section className="filters">
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'filter-button active' : 'filter-button'}
          onClick={() => onFilterChange('all')}
          type="button"
        >
          All
        </button>

        <button
          className={
            filter === 'active'
              ? 'filter-button active'
              : 'filter-button'
          }
          onClick={() => onFilterChange('active')}
          type="button"
        >
          Active
        </button>

        <button
          className={
            filter === 'completed'
              ? 'filter-button active'
              : 'filter-button'
          }
          onClick={() => onFilterChange('completed')}
          type="button"
        >
          Completed
        </button>
      </div>

      <input
        className="search-input"
        type="search"
        placeholder="Search tasks..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </section>
  )
}

export default TaskFilters