import { formatPrice } from '../data';

export default function CartSummary({ cart }) {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <p className="notice" aria-live="polite">Cart: {count} items | Total: {formatPrice(total)}</p>;
}
