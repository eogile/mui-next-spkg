/**
*
* LayoutItem
*
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from 'material-ui/Grid';

class LayoutItem extends Component {
  render() {
    return (
      <Grid item {...this.props}>
        {this.props.children}
      </Grid>
    );
  }
}

LayoutItem.propTypes = {
  children: PropTypes.node,
};
LayoutItem.defaultProps = {
  children: null,
};

export default LayoutItem;
