import { Link, useParams } from 'react-router';
import { categories, products, formatPrice } from '../data';
import ProductCatalog from '../components/ProductCatalog';
import { useShop } from '../components/Shop';
import { NotFound } from './BasicPages';

export function CategoryList() {
  return (
    <section><h1>Categories</h1><div className="grid">
      {categories.map(category => <article className="card" key={category.id}><h2><Link to={`/categories/${category.id}`}>{category.name}</Link></h2><p>{category.description}</p></article>)}
    </div></section>
  );
}

export function CategoryItems() {
  const { categoryId } = useParams();
  const { addProduct } = useShop();
  const category = categories.find(item => item.id === categoryId);
  if (!category) return <NotFound />;

  return <section><Link to="/categories">All categories</Link><h1>{category.name}</h1><p>{category.description}</p><ProductCatalog products={products.filter(item => item.categoryId === categoryId)} onAdd={addProduct} /></section>;
}

export function ItemDetails() {
  const { categoryId, itemId } = useParams();
  const { addProduct } = useShop();
  const product = products.find(item => item.id === Number(itemId) && item.categoryId === categoryId);
  if (!product) return <NotFound />;

  return <section><Link to={`/categories/${categoryId}`}>Back to category</Link><h1>{product.name}</h1><p>{product.description}</p><p className="price">{formatPrice(product.price)}</p><button onClick={() => addProduct(product)}>Add to cart</button></section>;
}
