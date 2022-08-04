import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container row">
        <div className="col-20">
          <h4>Kurumsal</h4>
          <p>Hakkımızda</p>
          <p>Kampanyalar</p>
          <p>Banka Hesap Numarası</p>
          <p>Blog</p>
          <p>Haberler</p>
        </div>
        <div className="col-20">
          <h4>Müşteri Hizmetleri</h4>
          <p>Sipariş Sorgulama</p>
          <p>Teslimat Ve Kargo</p>
          <p>İade Ve Değişim</p>
          <p>Üyelik Sözleşmesi</p>
          <p>Gizlilik ve Güvenlik</p>
        </div>
        <div className="col-20">
          <h4>Yardım</h4>
          <p>İletişim Bilgileri</p>
          <p>Sıkça Sorulan Sorular</p>
        </div>
        <div className="col-20">
          <p>
            <span>Adres: </span> 1376 Sok. No:1/43 Boran Plaza, Halkapınar
            Konak/İzmir
          </p>
          <p>
            <span>Telefon: </span>08505555555
          </p>
        </div>
        <div className="col-20">
          <h4>Bizi Takip Edin</h4>
          <div className="container__social">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <p>E-Bültene abone olun, gelişmeleri kaçırmayın</p>
          <input type="text" placeholder="E-Posta Adresiniz" />
          <button type="submit">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <hr />
      <p>Copyright © 2022 Tolga Han YILMAZ </p>
    </footer>
  );
};

export default Footer;
