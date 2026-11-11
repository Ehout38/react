import { NavLink, Outlet } from 'react-router';
import { useShop } from './Shop';
import ThemeToggle from './ThemeToggle';
import ThemePreview from './ThemePreview';

export default function Layout() {
  const { cart } = useShop();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header>
        <div className="header-inner">
          <NavLink to="/" className="brand">React Practice</NavLink>
          <nav aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/cart">Cart ({count})</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
        </div>
      </header>
      <div className="toolbar">
        <nav aria-label="Practice pages">
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/register/step-1">Game registration</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </nav>
        <div className="row"><ThemePreview /><ThemeToggle /></div>
      </div>
      <main><Outlet /></main>
      <footer>React Practice | Components, state and routing</footer>
    </>
  );
}
