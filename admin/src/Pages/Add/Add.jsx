import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";

const Add = () => {
  const url = "http://localhost:4080";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setData({ name: "", description: "", price: "", category: "Salad" });
      setImage(false);
    }
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="add-container">
      <form action="" onSubmit={onSubmitHandler}>
        <div>
          <h3>Upload image</h3>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
          />
          <h3>Product Name</h3>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            required
            placeholder="Type here"
          />
          <h3>Product description</h3>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="write content here"
            required
          ></textarea>
          <h3>Product Category</h3>
          <select
            onChange={onChangeHandler}
            value={data.category}
            name="category"
            required
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwitch">Sandwitch</option>
            <option value="Cake">Cake</option>
            <option value="Pure veg">Pure veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
          <h3>Product price </h3>
          <input
            onChange={onChangeHandler}
            value={data.price}
            name="price"
            type="Number"
            required
            placeholder="$20"
          />
          <br />
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
