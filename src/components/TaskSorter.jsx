export default function TaskSorter({ sort, onSortChange }) {
  return <label>Sort by<select value={sort} onChange={event => onSortChange(event.target.value)}><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="name">Name A-Z</option></select></label>;
}
