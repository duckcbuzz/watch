import React from "react";
import { Modal, makeStyles } from "@material-ui/core";
import Typography from "../../../UI_Kits/Typography";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
  },
  paper: {
    position: "absolute",
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    width: "100%",
    marginTop: 30,
    fontSize: 20,
    "&>tr": {
      padding: "20px",
    },
    "&>tr>th": {
      backgroundColor: "#F4F4F4",
      padding: "20px",
    },
    "&>tr>td": {
      textAlign: "center",
      padding: "20px",
      borderBottom: "1px solid #F4F4F4"
    },
  },
}));

function ModalSize(props) {
  const classes = useStyle();
  const { open, onClose } = props;

  return (
    <Modal
      className={classes.root}
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <Typography
          textTransform="uppercase"
          fontWeight={700}
          fontSize={30}
          textAlign="center"
        >
          Size áo
        </Typography>
        <table className={classes.table}>
          <tr>
            <th>Size áo</th>
            <th>Cân nặng</th>
            <th>Chiều cao</th>
          </tr>
          {[
            { size: "M", weight: "45-55kg", height: "1m50 - 1m64" },
            { size: "L", weight: "55-70kg", height: "1m65 - 1m74" },
            { size: "XL", weight: "70-80kg", height: "1m75 - 1m80" },
          ].map((item, index) => (
            <tr key={index}>
              <td>{item.size}</td>
              <td>{item.weight}</td>
              <td>{item.height}</td>
            </tr>
          ))}
        </table>
      </div>
    </Modal>
  );
}

ModalSize.propTypes = {};

export default ModalSize;
