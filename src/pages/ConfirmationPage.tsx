import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { Order } from '../types';

const ConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderById } = useOrders();
  const [order, setOrder] = useState<Order | undefined>();

  useEffect(() => {
    if (orderId) {
      const foundOrder = getOrderById(orderId);
      setOrder(foundOrder);
    }
  }, [orderId, getOrderById]);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-500">Loading order information...</p>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
          <p className="text-gray-600 mt-2">
            Your order has been placed successfully.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap justify-between items-center">
              <h2 className="text-xl font-semibold">Order Details</h2>
              <div className="flex items-center mt-2 sm:mt-0">
                <Clock className="w-4 h-4 text-primary-600 mr-1" />
                <span className="text-sm font-medium text-primary-600">
                  Estimated delivery: 5-10 minutes
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">
                  Order Information
                </h3>
                <p className="mb-1">
                  <span className="font-medium">Order ID:</span> #{order.id.slice(0, 8)}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Date:</span> {formatDate(order.createdAt)}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Payment Method:</span>{' '}
                  {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Payment Status:</span>{' '}
                  <span className={order.paymentStatus === 'completed' ? 'text-green-600' : 'text-yellow-600'}>
                    {order.paymentStatus === 'completed' ? 'Paid' : 'Pending'}
                  </span>
                </p>
                <p>
                  <span className="font-medium">Order Status:</span>{' '}
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">
                  Delivery Information
                </h3>
                <p className="mb-1">
                  <span className="font-medium">Name:</span> {order.customerInfo.name}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Phone:</span> {order.customerInfo.phone}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Address:</span> {order.customerInfo.address}
                </p>
                <p>
                  <span className="font-medium">Area:</span> {order.customerInfo.area}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-500 uppercase mb-3">
                Order Items
              </h3>

              <ul className="divide-y divide-gray-200">
                {order.items.map((item) => (
                  <li key={item.id} className="py-4 flex items-center">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex-1">
                      <h4 className="font-medium">{item.product.name}</h4>
                      <div className="flex justify-between mt-1">
                        <div className="text-sm text-gray-500">
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          <span>{item.selectedSize ? ' · ' : ''}Qty: {item.quantity}</span>
                        </div>
                        <p className="font-medium">₹{item.product.price * item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>₹{order.totalAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            to="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>

          <p className="text-gray-600">
            Questions about your order?{' '}
            <a
              href="https://wa.me/919398475727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700"
            >
              Contact Support <ArrowRight className="inline w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;