import React, { useContext, useState } from "react";
import ProductContext from "../contexts/products";

export default function ProductCreate() {
    const { onCreateProduct } = useContext(ProductContext)
    const initalState = {
        nama: "",
        deskripsi: "",
        imageUrl: "",
    };
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(initalState);
    const { nama, deskripsi, imageUrl } = formData;

    const handleShow = () => {
        setShowForm(!showForm);
    };
    const handleChangeProduct = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmitProduct = (e) => {
        e.preventDefault();
        onCreateProduct(formData);
        setFormData(initalState);
    };

    return (
        <div className="product-create">
            <div className="toggle-add">
                <button onClick={handleShow} className="edit-input-submit add-toggle">
                    {showForm ? "Close Form" : "Add Product"}
                </button>
            </div>
            {showForm && (
                <form className="form" onSubmit={handleSubmitProduct}>
                    <div className="form-add-title">Add Product</div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="add-input-text"
                            name="nama"
                            placeholder="Nama Product"
                            value={nama}
                            onChange={handleChangeProduct}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="add-input-text"
                            name="deskripsi"
                            placeholder="Deskripsi Product"
                            value={deskripsi}
                            onChange={handleChangeProduct}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="add-input-text"
                            name="imageUrl"
                            placeholder="Image URL Product"
                            value={imageUrl}
                            onChange={handleChangeProduct}
                        />
                    </div>
                    <input type="submit" className="edit-input-submit add" />
                </form>
            )}
        </div>
    );
}
