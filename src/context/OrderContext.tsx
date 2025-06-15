import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Order, CustomerInfo, CartItem, OrderStatus, PaymentMethod, PaymentStatus } from '../types';
import { mockOrders } from '../data/mockOrders';
import { v4 as uuidv4 } from 'uuid';

interface OrderContextType {
  orders: Order[];
  createOrder: (items: CartItem[], customerInfo: CustomerInfo, paymentMethod: PaymentMethod) => string;
  getOrderById: (id: string) => Order | undefined;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  updatePaymentStatus: (id: string, status: PaymentStatus) => void;
  getOrdersByArea: (area: string) => Order[];
  getOrdersByStatus: (status: OrderStatus) => Order[];
  getTotalRevenue: () => number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const createOrder = (
    items: CartItem[],
    customerInfo: CustomerInfo,
    paymentMethod: PaymentMethod
  ): string => {
    const totalAmount = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const paymentStatus: PaymentStatus = 
      paymentMethod === 'cod' ? 'pending' : 'completed';

    const newOrder: Order = {
      id: uuidv4(),
      items,
      customerInfo,
      totalAmount,
      status: 'pending',
      paymentMethod,
      paymentStatus,
      createdAt: new Date()
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    return newOrder.id;
  };

  const getOrderById = (id: string) => {
    return orders.find((order) => order.id === id);
  };

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const updatePaymentStatus = (id: string, status: PaymentStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, paymentStatus: status } : order
      )
    );
  };

  const getOrdersByArea = (area: string) => {
    return orders.filter((order) => order.customerInfo.area === area);
  };

  const getOrdersByStatus = (status: OrderStatus) => {
    return orders.filter((order) => order.status === status);
  };

  const getTotalRevenue = () => {
    return orders
      .filter((order) => order.paymentStatus === 'completed')
      .reduce((sum, order) => sum + order.totalAmount, 0);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
        updateOrderStatus,
        updatePaymentStatus,
        getOrdersByArea,
        getOrdersByStatus,
        getTotalRevenue
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};