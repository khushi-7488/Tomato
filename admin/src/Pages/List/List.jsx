import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";

const List = () => {
  const url = "http://localhost:4080";

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // const removeList = async (foodId) => {
  //   const response = axios.post(`${url}/api/food/remove`, { id: foodId });
  //   if (response.data.success) {
  //     setList([]);
  //   }
  // };

  return (
    <div className="list-containers">
      <h3>All food list</h3>
      <div className="list-items">
        <p>image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <div className="list-item">
        {list.map((item, index) => {
          return (
            <div className="item-class" key={index}>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={removeList} className="cross">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
