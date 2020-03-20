import React from "react"
import PropTypes from "prop-types"


class Admin extends React.Component {
  render () {
    return (
        <div>
          <div>Meat: {this.props.meat}</div>
        </div>
    );
  }
}

Admin.propTypes = {
  meat: PropTypes.string
};
export default Admin;
