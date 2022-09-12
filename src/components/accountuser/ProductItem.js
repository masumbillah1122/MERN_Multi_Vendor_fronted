import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';
import axios from 'axios';

const ProductItem = ({ product }) => {

    const id = product._id;

    const [openEdit, setOpenEdit] = useState(false);

    const handlerDeleteProduct = async(e) => {
        e.preventDefault();

         try {
            const { data } = await axios.delete(`/api/products/delete/${id}`);
            if (data) {
                alert("Product deleted successfully!");
            }
     
        } catch (error) {
        alert("Product not deleted");
        }

    }

  return (
    <>
      <div className="filter-card" key={product.id}>
        <div className="card-header">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="card-body">
          <Link to={`../${product.slug}`}>
            {product.name} <FontAwesomeIcon icon={faEye} />
          </Link>
          <span className="category">{product.category}</span>
          <span className="price">${Number(product.price).toFixed(2)}/kg</span>
        </div>
        <div className="card-footer account">
          <button onClick={(e) => setOpenEdit(true)}>
            <FontAwesomeIcon icon={faPencil} /> Edit
          </button>
          <button onClick={handlerDeleteProduct}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>

      {openEdit && <EditProduct product={product} setOpenEdit={setOpenEdit} />}
    </>
  );
};

export default ProductItem