/**
 * Select
 */

import React from "react";
import PropTypes from "prop-types";
import MuiSelect from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const Select = ({ id, label, helperText, fullWidth, error, disabled, required, children, ...otherProps }) => (
  <FormControl fullWidth={fullWidth} error={error} disabled={disabled} required={required}>
    {!!label && <InputLabel htmlFor={id}>{label}</InputLabel>}
    <MuiSelect
      input={<Input id={id} />}
      {...otherProps}
    >
      {children}
    </MuiSelect>
    {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

Select.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  helperText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
Select.defaultProps = {
  children: null,
  fullWidth: false,
};

export default Select;
