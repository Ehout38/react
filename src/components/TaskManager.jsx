import { useState } from 'react';
import TaskFilter from './TaskFilter';
import TaskSorter from './TaskSorter';
import TaskList from './TaskList';

const initialTasks = [
  { id: 1, title: 'Read the routing guide', completed: true },
  { id: 2, title: 'Build a product catalog', completed: false },
  { id: 3, title: 'Create a game profile', completed: false }
];

export default function TaskManager() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [title, setTitle] = useState('');
  const [nextId, setNextId] = useState(4);

  function addTask(event) {
    event.preventDefault();
    if (!title.trim()) return;
    setTasks(current => [...current, { id: nextId, title: title.trim(), completed: false }]);
    setNextId(current => current + 1);
    setTitle('');
  }

  function toggleTask(id) {
    setTasks(current => current.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  function deleteTask(id) {
    setTasks(current => current.filter(task => task.id !== id));
  }

  const visibleTasks = tasks.filter(task => filter === 'all' || (filter === 'completed' ? task.completed : !task.completed));
  visibleTasks.sort((first, second) => sort === 'name' ? first.title.localeCompare(second.title) : sort === 'oldest' ? first.id - second.id : second.id - first.id);

  return (
    <section>
      <h1>Task manager</h1>
      <form className="task-form" onSubmit={addTask}><label htmlFor="task-title">New task</label><div className="row"><input id="task-title" value={title} maxLength={100} required onChange={event => setTitle(event.target.value)} /><button type="submit" disabled={!title.trim()}>Add task</button></div></form>
      <div className="filters"><TaskFilter filter={filter} onFilterChange={setFilter} /><TaskSorter sort={sort} onSortChange={setSort} /></div>
      <p aria-live="polite">Showing {visibleTasks.length} of {tasks.length} tasks | Completed: {tasks.filter(task => task.completed).length}</p>
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </section>
  );
}
