import React, { useState } from "react";
import {
  makeStyles,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles(() => ({
  root: {
    margin: "10px 0px",
  },
  input: {
    fontSize: 14,
  }
}));

function InputSearch(props) {
  const classes = useStyle();
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <OutlinedInput
        id="search"
        className={classes.input}
        value={value}
        onChange={handleChange}
        placeholder="Tìm kiếm sản phẩm..."
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
}

InputSearch.propTypes = {};

export default InputSearch;
