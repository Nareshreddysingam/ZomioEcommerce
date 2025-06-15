export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  sizes?: string[];
  featured?: boolean;
  inStock: boolean;
  areas?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: CustomerInfo;
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  area: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'delivering' | 'delivered' | 'cancelled';
export type PaymentMethod = 'cod' | 'upi' | 'card' | 'netbanking';
export type PaymentStatus = 'pending' | 'completed' | 'failed';

export interface AdminUser {
  username: string;
  password: string; // Note: In a real app, never store plain passwords
  role: 'admin' | 'delivery';
}