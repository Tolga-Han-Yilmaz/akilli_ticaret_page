import React from "react";
import { FaList, FaThLarge } from "react-icons/fa";

const Main = () => {
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
          <div className="main__product-card col-25">
            <img
              src="https://cdn.dsmcdn.com/mnresize/500/-/ty95/product/media/images/20210404/11/873d446b/57956254/1/1_org.jpg"
              alt=""
            />

            <div className="main__product-card--info">
              <p>Lorem ipsum dolor sit amet.</p>
              <h4>6.688TL</h4>
              <p>
                <span>Taksitli Fiyatı : </span>3x2.3453TL
              </p>
            </div>
            <div className="main__product-card--detail">
              <input type="number" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
