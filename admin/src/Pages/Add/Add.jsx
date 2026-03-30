import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    // event.preventDefault();
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
              onClick={() => setImage(true)}
              src={assets.upload_area}
              alt=""
            />
          </label>
          <input type="file" id="image" hidden />
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
