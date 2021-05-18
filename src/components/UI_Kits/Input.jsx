import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const {
    name,
    type,
    value,
    label,
    error,
    startAdornment,
    endAdornment
  } = props;
  const { onChange } = props;
  return (
    <FormControl error={error} variant="outlined" fullWidth>
      <TextField
        fullWidth
        variant="outlined"
        name={name}
        type={type}
        value={value}
        label={label}
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        }
        endAdornment={endAdornment}
        labelWidth={label.length * 10}
        style={{ maxWidth: 350, marginTop: 8 }}
      />
    </FormControl>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  label: PropTypes.object.isRequired,
  startAdornment: PropTypes.object.isRequired,
  endAdornment: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

Input.defaultProps = {
  onChange: null
};

export default Input;
