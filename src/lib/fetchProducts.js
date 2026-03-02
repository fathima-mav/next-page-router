export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products")
    if (!res.ok) throw new Error("Failed to fetch products")
    const text = await res.text()
    return text ? JSON.parse(text) : []
  } catch (err) {
    console.error(err)
    return []
  }
}

export async function fetchProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!res.ok) throw new Error("Failed to fetch product")
    const text = await res.text()
    const data = text ? JSON.parse(text) : null
    return data && Object.keys(data).length ? data : null
  } catch (err) {
    console.error(err)
    return null
  }
}