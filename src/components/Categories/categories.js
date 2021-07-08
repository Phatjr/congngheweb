import React from "react";

import "./categories.css";

import Desk from "../../images/Desk.png";
import Chair from "../../images/Chair.png";
import Kitchenware from "../../images/Kitchenware.png";
import BookShelf from "../../images/BookShelf.png";
import Electronics from "../../images/Electronics.png";
const mockData = [
  {
    id: 1,
    title: "Desk",
    img: Desk,
  },
  {
    id: 1,
    title: "Chair",
    img: Chair,
  },
  {
    id: 1,
    title: "Kitchenware",
    img: Kitchenware,
  },
  {
    id: 1,
    title: "BookShelf",
    img: BookShelf,
  },
  {
    id: 1,
    title: "Electronics",
    img: Electronics,
  },
];

const categories = () => {
  return (
    <div className="categories">
      <div className="row">
        <div className="text5 col">
          <h2>
            <span>What we have</span>
          </h2>
          <p>CATEGORES</p>
        </div>
      </div>
      <div className="row">
        {mockData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className={`categories_item mt-2 item-${index % 3}`}>
              <p className="text-white">{item.title}</p>
              <img src={item.img} alt="" />
              <div className="w-100 d-flex">
                <div className="btn btn-primary">Shop now</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default categories;