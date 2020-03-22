import React from "react"
import PropTypes from "prop-types"


class Admin extends React.Component {
  render () {
    return (
        <div>
          <div>Meat: {this.props.data}</div>
        </div>
    );
  }
}

Admin.propTypes = {
  data: PropTypes.string
};

export default Admin;
