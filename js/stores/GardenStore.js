var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var GardenConstants = require('../constants/GardenConstants');

var CHANGE_EVENT = 'change';

var plants = {};

/**
 * Create a Plant.
 * @param  {string} displayName The content of the Plant
 */
function create(displayName) {
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  plants[id] = {
    id: id,
    complete: false,
    displayName: displayName
  };
}

/**
 * Update a Plant.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  plants[id] = assign({}, plants[id], updates);
}

/**
 * Delete a Plant.
 * @param  {string} id
 */
function destroy(id) {
  delete plants[id];
}

var GardenStore = assign({}, EventEmitter.prototype, {
  /**
   * Tests whether all the remaining Plants are marked as completed.
   * @return {boolean}
   */
  areAllComplete: function() {
    for (var id in plants) {
      if (!plants[id].complete) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of Plants.
   * @return {object}
   */
  getAll: function() {
    return plants;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var displayName;

  switch(action.actionType) {
    case GardenConstants.PLANT_CREATE:
      displayName = action.displayName.trim();
      if (displayName !== '') {
        create(displayName);
        GardenStore.emitChange();
      }
      break;

    case GardenConstants.PLANT_UPDATE:
      displayName = action.displayName.trim();
      if (displayName !== '') {
        update(action.id, {displayName: displayName});
        GardenStore.emitChange();
      }
      break;

    case GardenConstants.PLANT_DESTROY:
      destroy(action.id);
      GardenStore.emitChange();
      break;

    default:
      break;
  }
});

module.exports = GardenStore;
