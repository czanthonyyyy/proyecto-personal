import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/cart/CartItem'
import Button from '../components/ui/Button'
import { formatPrice } from '../utils/helpers'

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useCart()
  const subtotal = getCartTotal()
  const tax = subtotal * 0.16 // 16% tax
  const total = subtotal + tax
  
  const handleCheckout = () => {
    // Simulate checkout
    alert('¡Gracias por tu compra! Esta es una simulación.')
    clearCart()
  }
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Tu carrito está vacío
          </h2>
          <p className="text-white/60 mb-8">
            Agrega algunos juegos a tu carrito para comenzar
          </p>
          <Button variant="primary" size="lg">
            <a href="#store">Explorar Tienda</a>
          </Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Carrito de Compras</h1>
        <p className="text-white/60">
          Tienes {cart.length} {cart.length === 1 ? 'artículo' : 'artículos'} en tu carrito
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          
          {/* Clear Cart Button */}
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="md"
              onClick={clearCart}
              className="text-red-400 hover:text-red-300"
            >
              Limpiar Carrito
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass rounded-lg p-6 sticky top-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              Resumen del Pedido
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Subtotal</span>
                <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Impuestos (16%)</span>
                <span className="text-white font-semibold">{formatPrice(tax)}</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-lg">Total</span>
                  <span className="text-cyan font-bold text-xl">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              onClick={handleCheckout}
              className="w-full glow-cyan"
            >
              Proceder al Pago
            </Button>
            
            <p className="text-xs text-white/60 text-center mt-4">
              Al proceder al pago, aceptas nuestros términos y condiciones
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

