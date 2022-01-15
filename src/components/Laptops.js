import React from "react";
import "./Laptops.css";
import Product from "./Products";

function Laptops() {
  return (
    <div className="laptops">
      <div className="products">
        <Product
          product_heading="2020 Apple MacBook Pro"
          product_img="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg"
          product_description="(13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
        />
        <Product
          product_heading="Apple iMac with Retina 5K Display"
          product_img="https://m.media-amazon.com/images/I/71XyLsP7WjL._AC_UY327_FMwebp_QL65_.jpg"
          product_description="(27-inch/68.58 cm, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage) - Silver"
        />
        <Product
          product_heading="Microsoft Surface Laptop Go"
          product_img="https://m.media-amazon.com/images/I/718ETwvLVOL._AC_UY327_FMwebp_QL65_.jpg"
          product_description="10th Gen Intel Corea Touchscreen Laptop (8GB/256GB SSD/Windows 10 Home in Intel UHD Graphics/Platinum/1.110 kg)"
        />
        <Product
          product_heading="ASUS ZenBook Flip 13 OLED"
          product_img="https://m.media-amazon.com/images/I/71kamrjbeVL._AC_UY327_FMwebp_QL65_.jpg"
          product_description='Intel Core i5-1135G7 11th Gen, 13.3" FHD Touch 2-in-1 Laptop (8GB/512GB SSD + 32GB Optane Memory/Pine Grey/1.3 kg)'
        />
      </div>
    </div>
  );
}

export default Laptops;
