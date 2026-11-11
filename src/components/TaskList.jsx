export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) return <p>No tasks match this filter.</p>;
  return <ul className="task-list">{tasks.map(task => <li key={task.id}><label className={`check ${task.completed ? 'done' : ''}`}><input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} /><span>{task.title}</span></label><button className="secondary" aria-label={`Delete ${task.title}`} onClick={() => onDelete(task.id)}>Delete</button></li>)}</ul>;
}
