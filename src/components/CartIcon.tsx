import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

interface CartIconProps {
  onClick: () => void;
}

export function CartIcon({ onClick }: CartIconProps) {
  const { totalItems } = useCart();

  return (
    <button
      onClick={onClick}
      className="cart-icon relative p-2 text-dark hover:text-primary transition-colors"
    >
      <FaShoppingCart className="text-2xl" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {totalItems}
        </span>
      )}
    </button>
  );
} 