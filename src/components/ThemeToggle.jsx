import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button type="button" className="secondary" onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>;
}
