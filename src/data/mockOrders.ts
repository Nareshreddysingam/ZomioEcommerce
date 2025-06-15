import { Order, OrderStatus, PaymentMethod, PaymentStatus } from '../types';
import { mockProducts } from './mockProducts';
import { v4 as uuidv4 } from 'uuid';

// Helper to get a random date within the last 7 days
const getRandomDate = () => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 7);
  now.setDate(now.getDate() - daysAgo);
  return now;
};

// Generate mock orders
export const mockOrders: Order[] = [
  {
    id: uuidv4(),
    items: [
      { 
        id: uuidv4(),
        product: mockProducts[0], 
        quantity: 2, 
        selectedSize: "500ml" 
      },
      { 
        id: uuidv4(),
        product: mockProducts[1], 
        quantity: 1, 
        selectedSize: "Regular (2 pcs)" 
      }
    ],
    customerInfo: {
      name: "Rajesh Kumar",
      phone: "9876543210",
      address: "123 Main Road, Near Temple",
      area: "Chittoor"
    },
    totalAmount: mockProducts[0].price * 2 + mockProducts[1].price,
    status: "delivered" as OrderStatus,
    paymentMethod: "cod" as PaymentMethod,
    paymentStatus: "completed" as PaymentStatus,
    createdAt: getRandomDate()
  },
  {
    id: uuidv4(),
    items: [
      { 
        id: uuidv4(),
        product: mockProducts[2], 
        quantity: 3, 
        selectedSize: "300ml" 
      }
    ],
    customerInfo: {
      name: "Priya Sharma",
      phone: "8765432109",
      address: "45 Park Street, Apartment 3B",
      area: "Tirupati"
    },
    totalAmount: mockProducts[2].price * 3,
    status: "confirmed" as OrderStatus,
    paymentMethod: "upi" as PaymentMethod,
    paymentStatus: "completed" as PaymentStatus,
    createdAt: getRandomDate()
  },
  {
    id: uuidv4(),
    items: [
      { 
        id: uuidv4(),
        product: mockProducts[4], 
        quantity: 1, 
        selectedSize: "Family Pack" 
      },
      { 
        id: uuidv4(),
        product: mockProducts[6], 
        quantity: 2, 
        selectedSize: "Regular" 
      }
    ],
    customerInfo: {
      name: "Anand Reddy",
      phone: "7654321098",
      address: "789 College Road, Behind Hospital",
      area: "Chandragiri"
    },
    totalAmount: mockProducts[4].price + mockProducts[6].price * 2,
    status: "delivering" as OrderStatus,
    paymentMethod: "cod" as PaymentMethod,
    paymentStatus: "pending" as PaymentStatus,
    createdAt: getRandomDate()
  },
  {
    id: uuidv4(),
    items: [
      { 
        id: uuidv4(),
        product: mockProducts[8], 
        quantity: 4, 
        selectedSize: "Single" 
      }
    ],
    customerInfo: {
      name: "Lakshmi Devi",
      phone: "6543210987",
      address: "56 Temple Street, Near Bus Stand",
      area: "Tirupati"
    },
    totalAmount: mockProducts[8].price * 4,
    status: "pending" as OrderStatus,
    paymentMethod: "card" as PaymentMethod,
    paymentStatus: "completed" as PaymentStatus,
    createdAt: getRandomDate()
  },
  {
    id: uuidv4(),
    items: [
      { 
        id: uuidv4(),
        product: mockProducts[11], 
        quantity: 2, 
        selectedSize: "250g" 
      },
      { 
        id: uuidv4(),
        product: mockProducts[3], 
        quantity: 3, 
        selectedSize: "Large" 
      }
    ],
    customerInfo: {
      name: "Vijay Nath",
      phone: "5432109876",
      address: "12 Railway Colony, House No. 5",
      area: "Renigunta"
    },
    totalAmount: mockProducts[11].price * 2 + mockProducts[3].price * 3,
    status: "cancelled" as OrderStatus,
    paymentMethod: "cod" as PaymentMethod,
    paymentStatus: "failed" as PaymentStatus,
    createdAt: getRandomDate()
  }
];

export const mockAdminUsers = [
  {
    username: "admin",
    password: "admin123", // Note: In a real app, this would be hashed
    role: "admin" as const
  },
  {
    username: "delivery",
    password: "delivery123", // Note: In a real app, this would be hashed
    role: "delivery" as const
  }
];