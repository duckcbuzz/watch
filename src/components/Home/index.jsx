import React from "react";

import Category from "./Category";
import Slideshow from "./Slideshow";

import ListNewArrivals from "./ListNewArrivals";
import Feedback from "./Feedback";
import Trending from "./Trending";
import ListBestSale from "./ListBestSale";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Slideshow
        slideImages={[
          "https://cf.shopee.vn/file/9092080633f0f01912e06a8e505ecd51",
          "https://cf.shopee.vn/file/29c2c58832f47894ce09a0bbf0b2d005",
          "https://picsum.photos/800",
        ]}
      />
      <Category
        categoryArray={[
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            title: "Hoodie",
          },
          {
            title: "Pull",
          },
          {
            title: "Pull",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            title: "Hoodie",
          },
          {
            title: "Pull",
          },
        ]}
      />
      <ListNewArrivals
        listProducts={[
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "18.000₫",
          },
          {
            name: "Pull",
            price: "30.000₫",
          },
          {
            name: "Pull",
            price: "40.000₫",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "150.000₫",
          },
          {
            name: "Pull",
            price: "70.000₫",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "18.000₫",
          },
          {
            name: "Pull",
            price: "30.000₫",
          },
          {
            name: "Pull",
            price: "40.000₫",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "150.000₫",
          },
          {
            name: "Pull",
            price: "70.000₫",
          },
        ]}
      />
      <Trending />
      <ListBestSale
        listProducts={[
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "18.000₫",
          },
          {
            name: "Pull",
            price: "30.000₫",
          },
          {
            name: "Pull",
            price: "40.000₫",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "150.000₫",
          },
          {
            name: "Pull",
            price: "70.000₫",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "18.000₫",
          },
          {
            name: "Pull",
            price: "30.000₫",
          },
          {
            name: "Pull",
            price: "40.000₫",
          },
          {
            image: "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
            name: "Hoodie",
            price: "150.000₫",
          },
          {
            name: "Pull",
            price: "70.000₫",
          },
        ]}
      />
      <Feedback
        slideImages={[
          "https://picsum.photos/1000",
          "https://picsum.photos/800",
          "https://picsum.photos/900",
          "https://picsum.photos/1000",
          "https://picsum.photos/800",
          "https://picsum.photos/900",
          "https://picsum.photos/1000",
          "https://picsum.photos/800",
          "https://picsum.photos/900",
        ]}
      />
    </div>
  );
}
