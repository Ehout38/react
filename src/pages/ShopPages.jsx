import { Link } from 'react-router';
import { products, formatPrice } from '../data';
import { useShop } from '../components/Shop';
import ProductCatalog from '../components/ProductCatalog';
import CartSummary from '../components/CartSummary';
import ClearCartButton from '../components/ClearCartButton';

export function ShopPage() {
  const { cart, addProduct, clearCart } = useShop();
  return <section><h1>Shop</h1><CartSummary cart={cart} /><div className="actions"><Link to="/cart">View cart</Link><ClearCartButton onClear={clearCart} disabled={!cart.length} /></div><ProductCatalog products={products} onAdd={addProduct} /></section>;
}

export function CartPage() {
  const { cart, clearCart } = useShop();
  return (
    <section>
      <h1>Cart</h1>
      <CartSummary cart={cart} />
      {cart.length ? <div className="table-wrap"><table><thead><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Subtotal</th></tr></thead><tbody>{cart.map(item => <tr key={item.id}><td>{item.name}</td><td>{item.quantity}</td><td>{formatPrice(item.price)}</td><td>{formatPrice(item.quantity * item.price)}</td></tr>)}</tbody></table></div> : <p>Your cart is empty.</p>}
      <div className="actions"><Link to="/shop">Continue shopping</Link><ClearCartButton onClear={clearCart} disabled={!cart.length} /></div>
    </section>
  );
}
