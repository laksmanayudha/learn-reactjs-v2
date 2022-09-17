import React from "react";
import PropTypes from "prop-types";

// function SayHello({ name }) {
//     return <p>Hello, {name}</p>;
// }

class SayHello extends React.Component {
    render() {
      const { name } = this.props;
   
      return <p>Hello, {name}</p>;
    }
}

SayHello.propTypes = {
    name: PropTypes.string.isRequired
};

export default SayHello;