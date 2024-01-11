import React, { useState } from "react";

export default function ProductEdit({ product, onEditProduct, handleCancelEditProduct }) {
  const initalState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };
  const [formData, setFormData] = useState(initalState);
  const { nama, deskripsi, imageURL } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitProduct = (e) => {
    e.preventDefault();
    onEditProduct(product.id, formData)
  };
  const onCancelEditProduct = (e) => {
    e.preventDefault();
    handleCancelEditProduct()
  }
  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmitProduct}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="edit-input-text"
            placeholder="Nama Product"
            name="nama"
            value={nama}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="edit-input-text"
            placeholder="Deskripsi Product"
            name="deskripsi"
            value={deskripsi}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="edit-input-text"
            placeholder="Image URL Product"
            name="imageURL"
            value={imageURL}
          />
        </div>
        <input type="submit" className="edit-input-submit save" value="Save" />
        <button className="edit-input-submit cancel" onClick={onCancelEditProduct}>Cancel</button>
      </form>
    </div>
  );
}
