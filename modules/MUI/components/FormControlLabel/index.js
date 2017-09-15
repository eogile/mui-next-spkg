/**
*
* FormControlLabel
*
*/

import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel as MuiFormControlLabel } from 'material-ui/Form';

const FormControlLabel = ({ children, ...props }) => (
  <MuiFormControlLabel control={children} {...props}/>
);

FormControlLabel.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};
FormControlLabel.defaultProps = {
  children: null,
};

export default FormControlLabel;
