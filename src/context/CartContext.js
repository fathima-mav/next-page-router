
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Add a product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      // Check if product already exists
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        // Increase qty if exists
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      // Otherwise add new product with qty 1
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0) // remove item if qty becomes 0
    )
  }

  const clearCart = () => setCart([])

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQty,
        decreaseQty,
        clearCart,
        subtotal,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)