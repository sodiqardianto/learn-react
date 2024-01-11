import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import ProductEdit from "./ProductEdit";

export default function ProductCard({ product, onDeleteProduct, onEditProduct }) {
  const { id, nama, deskripsi, imageURL } = product;
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const kurangProduct = () => {
    setJumlahProduct(jumlahProduct - 1);
  };
  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1);
  };
  const handleDeleteProduct = () => {
    onDeleteProduct(id);
  };
  const handleshowEditProduct = () => {
    setShowEditProduct(!showEditProduct);
  };
  const handleUpdatedEditProduct = (id, data) => {
    onEditProduct(id,data)
    setShowEditProduct(false)
  }
  const handleCancelEditProduct = () => {
    setShowEditProduct(false)
  }

  return (
    <div className="card">
      {showEditProduct ? (
        <ProductEdit product={product} onEditProduct={handleUpdatedEditProduct} handleCancelEditProduct={handleCancelEditProduct}/>
      ) : (
        <>
          <div className="edit-delete">
            <AiTwotoneEdit
              className="icon-edit"
              onClick={handleshowEditProduct}
            />
            <MdDeleteForever
              className="icon-delete"
              onClick={handleDeleteProduct}
            />
          </div>
          <img
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px 10px 0px 0px",
            }}
            src={imageURL}
            alt=""
          />
          <div className="container">
            <h4>
              <b>{nama}</b>
            </h4>
            <p>{deskripsi}</p>
          </div>
          <div
            className={`card-keranjang ${
              jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"
            }`}
          >
            {jumlahProduct > 0 ? (
              <>
                <button className="button" onClick={kurangProduct}>
                  -
                </button>
                <div>{jumlahProduct}</div>
                <button className="button" onClick={tambahProduct}>
                  +
                </button>
              </>
            ) : (
              <div onClick={tambahProduct} className="keranjang">
                + Keranjang
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
