var React = require('react');
var Store = require('../stores/Store.js');
var ActionCreators = require('../actions/ActionCreators');

var Grandchild = React.createClass({

  getInitialState: function () {
    return {
      isAvailable: Store.getIsAvailable()
    };
  },

  handleClick: function () {
    this.setState({
      isAvailable: true
    });
    ActionCreators.setAvailability(false);
  },

  handleChange: function () {
    console.log('child handleChange');

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
        <div>
          <button onClick={this.handleClick} className="btn btn-default">Update</button>
          <p>Available.</p>
        </div>
      );
    }

    return (<p>Not available.</p>);
  }
});

module.exports = Grandchild;
