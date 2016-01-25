var React = require('react');
var Child = require('./Child.jsx');
var Store = require('../stores/Store.js');

var Parent = React.createClass({

  getInitialState: function () {
    return {
      isAvailable: Store.getIsAvailable()
    };
  },

  handleChange: function () {
    console.log('parent handleChange');

    this.setState({
      isAvailable: Store.getIsAvailable()
    });
  },

  componentDidMount: function () {
    Store.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.handleChange);
  },

  render: function () {
    if (this.state.isAvailable) {
      return (
        <div className="container">
          <Child />
        </div>
      );
    }

    return (
      <div className="container">
        <p>No child.</p>
      </div>
    );
  }
});

module.exports = Parent;
