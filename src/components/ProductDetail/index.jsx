import React from "react";
import ListSameProduct from "./ListSameProduct";
import ListImage from "./ListImage";
import InforContent from "./InforContent";
import { Box } from "@material-ui/core";
import imageNotFound from "../../assets/image-not-found.png";

function InformationPage(props) {
  const { detail } = props;
  return (
    <div>
      <div style={{ margin: "2%" }}>
        <Box display="flex">
          <Box pr={4}>
            <img
              width="500px"
              src={detail.image || imageNotFound}
              alt=""
            />
          </Box>
          <Box flexGrow={1}>
            <InforContent
              name={detail.name}
              price={"$" + detail.price}
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
