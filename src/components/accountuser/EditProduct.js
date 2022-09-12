import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faRefresh } from '@fortawesome/free-solid-svg-icons';

const EditProduct = ({setOpenEdit, product}) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
    
    const [name, setName] = useState(product.name);
    const [slug, setSlug] = useState(product.slug);
    const [category, setCategory] = useState(product.category);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const [imageProduct, setImageProduct] = useState(null);
    const [uploadingImageProduct, setUploadingImageProduct] = useState(false);
    const [previewImageProduct, setPreviewImageProduct] = useState(product.image);

    const validateImageProduct = async (e) => {
      const file = e.target.files[0];
      if (file.size >= 1048576) {
        return alert("Max size for Image is 1MB");
      } else {
        setImageProduct(file);
        setPreviewImageProduct(URL.createObjectURL(file));
      }
    };

    //Clodinary Image Upload in React
    const uploadImageProduct = async () => {
      const data = new FormData();
      data.append("file", imageProduct);
      data.append("upload_preset", "awn1mjb4");

      try {
        setUploadingImageProduct(true);
        let res = await fetch(
          "https://api.cloudinary.com/v1_1/dmiu18lya/image/upload",
          {
            method: "post",
            body: data,
          }
        );

        const urlData = await res.json();
        setUploadingImageProduct(false);
        return urlData.url;
      } catch (error) {
        setUploadingImageProduct(false);
        console.log(error);
      }
    };

    const handlerUpdateProduct = async (e) => {
        e.preventDefault();

        //If is not set new images, if exist image
        if (previewImageProduct) {
          try {
            const { data } = await axios.put("/api/products/update", {
              _id: product._id,
              name,
              slug,
              category,
              description,
              price,
              image: previewImageProduct,
              sellerId: userInfo._id,
              seller: userInfo.name,
              sellerImage: userInfo.image,
            });
            console.log(data);
            alert("You have successfully Product Updated!");
            navigate("/account");
            setOpenEdit(false);
          } catch (error) {
            console.log("Error!");
            alert("Product updated failed, Please try again!");
          }
        } else {

            const url = await uploadImageProduct(imageProduct);
            console.log(url);


            try {
              const { data } = await axios.put("/api/products/update", {
                id: product._id,
                name,
                slug,
                category,
                description,
                price,
                image: url,
                sellerId: userInfo._id,
                seller: userInfo.name,
                sellerImage: userInfo.image,
              });
              console.log(data);
              alert("You have successfully Product Updated!");
              navigate("/account");
              setOpenEdit(false);
            } catch (error) {
              console.log("Error!");
              alert("Product updated failed, Please try again!");
            }
        }

        const url = await uploadImageProduct(imageProduct);
        console.log(url);
    };



  return (
    <div className="passwords">
      <form onSubmit={handlerUpdateProduct}>
        <div className="close-form" onClick={() => setOpenEdit(false)}>
          X
        </div>
        <div className="form-group">
          <label htmlFor="pass">Name</label>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="slug">Slug</label>
          <input
            required
            type="text"
            onChange={(e) => setSlug(e.target.value)}
            value={slug}
            id="slug"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            required
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            id="category"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            required
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            required
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            id="price"
          />
        </div>
        <div className="form-group form-image product">
          <img
            src={previewImageProduct}
            alt=""
          />
          <label htmlFor="image_update_product">
            <FontAwesomeIcon icon={faPlusCircle} />
          </label>
          <input
            type="file"
            id="image_update_product"
            hidden
            accept="image/png, image/jpg, image/jpeg"
            onChange={validateImageProduct}
          />
        </div>

        <div className="form-btn">
          <button type="submit">
            <FontAwesomeIcon icon={faRefresh} />
            {uploadingImageProduct ? "Changing..." : "Edit Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct
