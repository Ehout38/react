export const categories = [
  { id: 'gear', name: 'Gaming gear', description: 'Useful tools for your next game.' },
  { id: 'books', name: 'Books', description: 'Stories and practical guides.' },
  { id: 'accessories', name: 'Accessories', description: 'Small upgrades for your desk.' }
];

export const products = [
  { id: 1, categoryId: 'gear', name: 'Keyboard', price: 70, description: 'A compact mechanical keyboard with quiet switches.' },
  { id: 2, categoryId: 'gear', name: 'Mouse', price: 35, description: 'A lightweight gaming mouse with adjustable sensitivity.' },
  { id: 3, categoryId: 'books', name: 'React Guide', price: 25, description: 'A practical introduction to components, state and routing.' },
  { id: 4, categoryId: 'books', name: 'Space Stories', price: 18, description: 'A collection of short science fiction adventures.' },
  { id: 5, categoryId: 'accessories', name: 'Desk Mat', price: 15, description: 'A wide mat that keeps your workspace comfortable.' },
  { id: 6, categoryId: 'accessories', name: 'Laptop Stand', price: 30, description: 'An adjustable stand for a better screen position.' }
];

export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}
