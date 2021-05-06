import React from "react";
import ListSameProduct from "./ListSameProduct";
import ListImage from "./ListImage";
import InforContent from "./InforContent";
import { Box } from "@material-ui/core";

function InformationPage(props) {
  return (
    <div>
      <div style={{ margin: "2%" }}>
        <Box display="flex">
          <Box>
            <ListImage
              listImages={[
                "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
                "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
                "https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f",
              ]}
            />
          </Box>
          <Box pr={4} pl={4}>
            <img
              width="500px"
              src="https://cf.shopee.vn/file/228542d03f01ddbf605910a351d7695f"
              alt=""
            />
          </Box>
          <Box flexGrow={1}>
            <InforContent
              name="Áo Hoodie Sunset Volcano Unisex Nocturnal"
              price="18.000₫"
            />
          </Box>
        </Box>
      </div>
      <ListSameProduct
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
        ]}
      />
    </div>
  );
}

InformationPage.propTypes = {};

export default InformationPage;
