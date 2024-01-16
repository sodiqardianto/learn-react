import axios from "axios"

export const fetchProduct = async () => {
    return await axios.get(`http://localhost:3001/products`)
}

export const createProduct = async (product) => {
    return await axios.post('http://localhost:3001/products', product)
}

export const editProduct = async (id, data) => {
    return await axios.put(`http://localhost:3001/products/${id}`, data)
}

export const deleteProduct = async (id) => {
    return await axios.delete(`http://localhost:3001/products/${id}`)
}