export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    available: false,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A smaller phone with a great screen',
    available: true,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 599,
    description: 'A standard phone with good features',
    available: false,
  },
  {
    id: 4,
    name: 'Phone Pro',
    price: 899,
    description: 'A pro-level phone with top-tier features',
    available: true
  },
  {
    id: 5,
    name: 'Phone Lite',
    price: 499,
    description: 'A lighter version with essential features',
    available: false,
  },
  {
    id: 6,
    name: 'Phone Plus',
    price: 999,
    description: 'A phone that offers extra features',
    available: true
  },
  {
    id: 7,
    name: 'Phone Ultra',
    price: 1299,
    description: 'An ultra-premium phone with advanced technology',
    available: true
  },
  {
    id: 8,
    name: 'Phone Mega',
    price: 1499,
    description: 'A mega-sized phone with cutting-edge specs',
    available: false
  },
  {
    id: 9,
    name: 'Phone Lite Plus',
    price: 549,
    description: 'A lighter version with some extra features',
    available: true
  },
  {
    id: 10,
    name: 'Phone Ultra Mini',
    price: 899,
    description: 'An ultra-premium compact-sized phone',
    available: false
  },
];
