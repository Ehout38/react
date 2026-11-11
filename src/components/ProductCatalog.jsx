import { Link } from 'react-router';
import { formatPrice } from '../data';

export default function ProductCatalog({ products, onAdd }) {
  return (
    <div className="grid">
      {products.map(product => (
        <article className="card" key={product.id}>
          <span className="eyebrow">{product.categoryId}</span>
          <h2><Link to={`/categories/${product.categoryId}/items/${product.id}`}>{product.name}</Link></h2>
          <p>{product.description}</p>
          <div className="row"><strong>{formatPrice(product.price)}</strong><button onClick={() => onAdd(product)}>Add to cart</button></div>
        </article>
      ))}
    </div>
  );
}
