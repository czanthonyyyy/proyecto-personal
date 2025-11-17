import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/cart/CartItem'
import Button from '../components/ui/Button'
import { formatPrice } from '../utils/helpers'
import { FaShoppingCart } from 'react-icons/fa'

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
          <FaShoppingCart className="w-16 h-16 mx-auto mb-4 text-cyan" aria-hidden="true" />
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
  
  const checkoutSteps = [
    { label: 'Carrito', status: 'done' },
    { label: 'Pago', status: 'active' },
    { label: 'Descarga', status: 'upcoming' },
  ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan/15 via-purple/10 to-transparent p-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Checkout NovaForge</p>
            <h1 className="text-4xl font-black text-white">Carrito de Compras</h1>
            <p className="text-white/70">
              Tienes {cart.length} {cart.length === 1 ? 'artículo' : 'artículos'} listos para pagar.
              Garantizamos activación inmediata y resguardamos tus claves en la nube.
            </p>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Total estimado</p>
            <p className="text-3xl font-bold text-cyan">{formatPrice(total)}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          {checkoutSteps.map((step, index) => (
            <div key={step.label} className="flex-1 flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  step.status === 'done'
                    ? 'bg-cyan text-black border-cyan'
                    : step.status === 'active'
                    ? 'border-cyan text-cyan'
                    : 'border-white/20 text-white/40'
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm ${
                  step.status === 'done'
                    ? 'text-white'
                    : step.status === 'active'
                    ? 'text-cyan'
                    : 'text-white/50'
                }`}
              >
                {step.label}
              </span>
              {index < checkoutSteps.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
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

        <div className="lg:col-span-1">
          <div className="glass rounded-lg p-6 sticky top-4 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Resumen del Pedido</h2>
              <p className="text-white/60 text-sm">Impuestos calculados según tu dirección actual.</p>
            </div>
            <div className="space-y-4">
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
            <Button variant="primary" size="lg" onClick={handleCheckout} className="w-full glow-cyan">
              Proceder al Pago
            </Button>
            <p className="text-xs text-white/60 text-center">
              Al proceder al pago, aceptas nuestros términos y condiciones
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

