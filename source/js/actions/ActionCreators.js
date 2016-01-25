var Dispatcher = require('../dispatcher/Dispatcher');

function setAvailability(availability) {
  var action = {
    type: 'set_availability',
    isAvailable: availability
  };

  Dispatcher.dispatch(action);
}

module.exports = {
  setAvailability: setAvailability
};
