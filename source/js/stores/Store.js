var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var isAvailable = true;

function setAvailability(availability) {
  isAvailable = availability;

  Store.emit('change');
}

var Store = objectAssign({}, EventEmitter.prototype, {

  getIsAvailable: function () {
    return isAvailable;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'set_availability') {
    setAvailability(action.isAvailable);
  }
}

Store.dispatchToken = Dispatcher.register(handleAction);

module.exports = Store;
