import { NextResponse } from 'next/server';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Traditional Ghanaian Chair',
    price: 299.99,
    image: '/images/traditional chair.jpg',
    category: 'chairs',
    description: 'Hand-carved from local mahogany with traditional patterns',
    materials: ['Mahogany', 'Traditional fabric'],
    dimensions: 'H: 90cm, W: 50cm, D: 50cm',
    inStock: true
  },
  {
    id: 2,
    name: 'Modern Coffee Table',
    price: 399.99,
    image: '/images/coffee table.jpg',
    category: 'tables',
    description: 'Contemporary design with traditional Ghanaian elements',
    materials: ['Teak', 'Glass'],
    dimensions: 'H: 45cm, W: 100cm, D: 60cm',
    inStock: true
  },
  {
    id: 3,
    name: 'Custom Dining Set',
    price: 1299.99,
    image: '/images/dinning set.jpg',
    category: 'dining',
    description: 'Complete dining set for family gatherings',
    materials: ['Mahogany', 'Upholstery fabric'],
    dimensions: 'Table: H: 75cm, W: 180cm, D: 90cm',
    inStock: true
  }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  return NextResponse.json(product);
} 