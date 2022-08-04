/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import $ from "jquery";
import {
  FaList,
  FaThLarge,
  FaShoppingCart,
  FaRegHeart,
  FaStream,
  FaArrowRight,
} from "react-icons/fa";

const Main = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  // state
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [categs, setCategs] = useState([]);
  const [show, setShow] = useState(false);

  // Categories api
  var categories = {
    url: "https://api.akilliticaretim.com/api/Product/ListCategories",
    method: "GET",
    timeout: 0,
    headers: {
      GUID: "0739-E657-C4F4-98B4",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  useEffect(() => {
    $.ajax(categories).done(function (response) {
      setCategs(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Products api
  var settings = {
    url: "https://api.akilliticaretim.com/api/Product/ListProducts/0",
    method: "GET",
    timeout: 0,
    headers: {
      GUID: "0739-E657-C4F4-98B4",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  useEffect(() => {
    $.ajax(settings).done(function (response) {
      setItems(response.data.slice(0, 4));
      setProducts(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePage = (e) => {
    let number = Number(e.target.value);
    setItems(products.slice(4 * number - 4, 4 * number));
  };
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <main>
      <div className="main__items">
        <div className="container">
          <p onClick={handleShow}>Kategoriler</p>
        </div>
      </div>

      <div className={show ? "d-menu" : "d-none"}>
        <ul>
          {categs.map((category, index) => {
            return (
              <li key={index}>
                <a href="#">{category.categoryName}</a>
                <ul>
                  {category.subCategoryList.map((sub, i) => {
                    return (
                      <li key={i}>
                        <a href="">{sub.categoryName}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="main__anasayfa">
        <div className="container">
          <p>{"Anasayfa >"}</p>
          <p>Bebek Arabası</p>
        </div>
      </div>
      <div className="main__text">
        <p>
          <span>Bebek Arabası </span>
          kategorisi içeriğindeki ürünler listeleniyor
        </p>
      </div>
      <div className="main__filter">
        <div className="container row">
          <div className="main__filter-time col-25">
            <select name="" id="">
              <option value="">En Son Eklenenlere Göre</option>
            </select>
          </div>
          <div className="main__filter-category col-25">
            <select name="" id="">
              <option value="">Tüm Ürünler</option>
            </select>
          </div>
          <div className="main__filter-design col-25">
            <FaList size={26} />
            <FaThLarge size={26} />
          </div>
        </div>
      </div>
      <div className="main__product">
        <div className="container row">
          {items.map((item, index) => {
            return (
              <div className="main__product-card col-25" key={index}>
                <img
                  src="https://cdn.dsmcdn.com/mnresize/500/-/ty95/product/media/images/20210404/11/873d446b/57956254/1/1_org.jpg"
                  alt="photo"
                />

                <div className="main__product-card--info">
                  <p>{item.name}</p>
                  <h4>{item.price} TL</h4>
                </div>
                <div className="main__product-card--detail">
                  <input type="number" value={1} />
                  <br />
                  <div>
                    <FaShoppingCart className="icon" title="Sepete Ekle" />
                    <FaRegHeart className="icon" />
                    <FaStream className="icon" />
                  </div>
                  <button>
                    ÜRÜNÜ İNCELE
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main__button">
        <div onClick={(e) => handlePage(e)} className="container">
          <button value="1">1</button>
          <button value="2">2</button>
          <button value="3">3</button>
          <button value="4">4</button>
          <button value="5">5</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
