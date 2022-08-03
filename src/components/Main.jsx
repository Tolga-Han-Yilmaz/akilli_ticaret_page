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
  const [items, setItems] = useState();
  var settings = {
    url: "https://api.akilliticaretim.com/api/Product/ListProducts/0",
    method: "GET",
    timeout: 0,
    headers: {
      GUID: "0739-E657-C4F4-98B4",
      Authorization:
        "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZmE3MDljYS1lNzE0LTQwYmMtYTZlOC02ZjNlM2U5MDNhMTkiLCJ1c2VyaWQiOiIxMDE0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJndWlkIjoiMDczOS1FNjU3LUM0RjQtOThCNCIsImV4cCI6MTY1OTU0ODU3OSwiaXNzIjoiaHR0cHM6Ly93d3cuYWtpbGxpdGljYXJldC5jb20vIiwiYXVkIjoiaHR0cHM6Ly93d3cuYWtpbGxpdGljYXJldC5jb20vIn0.0I-BgHxD0OVCuwrAiW-ycD1h0YlngdcGsg3q6sn4Moo",
    },
  };

  useEffect(() => {
    $.ajax(settings).done(function (response) {
      console.log(response.data);

      setItems(response.data[0]);
    });
  }, []);

  console.log(items);
  return (
    <main>
      <div className="main__items">
        <div className="container">
          <ul>
            <li>Beyaz Eşya</li>
            <li>Ayakkabı</li>
            <li>Televizyonlar & Ses Sistemleri</li>
            <li>Ev Eşyaları</li>
            <li>Kişisel Bakım</li>
            <li>Mutfak Gereçleri</li>
          </ul>
        </div>
      </div>
      <div className="main__anasayfa">
        <div className="container">
          <p>{"Anasayfa >"}</p>
          <p>Beyaz Eşya</p>
        </div>
      </div>
      <div className="main__text">
        <p>
          <span>Beyaz Eşya </span>
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
          return (
          <div className="main__product-card col-25">
            <img
              src="https://cdn.dsmcdn.com/mnresize/500/-/ty95/product/media/images/20210404/11/873d446b/57956254/1/1_org.jpg"
              alt=""
            />

            <div className="main__product-card--info">
              {/* <p>{items.data[0].id}</p> */}
              <h4>6.688TL</h4>
              <p>
                <span>Taksitli Fiyatı : </span>3x2.3453TL
              </p>
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
        </div>
      </div>
    </main>
  );
};

export default Main;
