import { useTheme } from '../context/ThemeContext';

export default function ThemePreview() {
  const { theme } = useTheme();
  return <span className={`theme-preview ${theme}`} aria-live="polite">Current theme: {theme}</span>;
}
