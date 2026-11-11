import { Link } from 'react-router';

export function Home() {
  return (
    <section>
      <span className="eyebrow">Welcome</span>
      <h1>Your practice space</h1>
      <p>Explore categories, build a cart, create a game profile and manage tasks.</p>
      <Link className="button" to="/register/step-1">Create your game profile</Link>
      <div className="grid features">
        <article className="card"><h2>Browse</h2><p>Choose a category and read product details.</p><Link to="/categories">Open categories</Link></article>
        <article className="card"><h2>Shop</h2><p>Add products and see your cart total update.</p><Link to="/shop">Open shop</Link></article>
        <article className="card"><h2>Plan</h2><p>Add, complete, filter and sort your tasks.</p><Link to="/tasks">Open tasks</Link></article>
      </div>
    </section>
  );
}

export function About() {
  return <section><h1>About</h1><p>This application demonstrates React Router, shared theme context, lifted state, callback functions and a multi-step form.</p><p>The header and footer stay in place while the current page is displayed inside an Outlet.</p></section>;
}

export function Contacts() {
  return <section><h1>Contacts</h1><p>This is a course practice application.</p><p>For questions about this project, open an issue in its GitHub repository.</p></section>;
}

export function NotFound() {
  return <section><h1>Page not found</h1><p>The requested page does not exist.</p><Link to="/">Back to home</Link></section>;
}
