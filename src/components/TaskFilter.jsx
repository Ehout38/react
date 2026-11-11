export default function TaskFilter({ filter, onFilterChange }) {
  return <label>Filter<select value={filter} onChange={event => onFilterChange(event.target.value)}><option value="all">All</option><option value="active">Active</option><option value="completed">Completed</option></select></label>;
}
