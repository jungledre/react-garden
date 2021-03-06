import AppDispatcher from '../dispatcher/AppDispatcher';
import GardenConstants from '../constants/GardenConstants';

export default {

  /**
   * @param  {string} displayName
   */
  create: function(displayName) {
    AppDispatcher.dispatch({
      actionType: GardenConstants.PLANT_CREATE,
      displayName: displayName
    });
  },

  /**
   * @param  {string} id The ID of the plant
   * @param  {string} displayName
   */
  update: function(id, displayName) {
    AppDispatcher.dispatch({
      actionType: GardenConstants.PLANT_UPDATE,
      id: id,
      displayName: displayName
    });
  },

  /**
   * @param  {string} id The ID of the plant
   * @param  {string} displayName
   */
  update: function(id, displayName) {
    AppDispatcher.dispatch({
      actionType: GardenConstants.PLANT_UPDATE,
      id: id,
      displayName: displayName
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: GardenConstants.PLANT_DESTROY,
      id: id
    });
  },

  /**
   * Delete all the completed plants
   */
  destroyCompleted: function() {
    AppDispatcher.dispatch({
      actionType: GardenConstants.PLANT_DESTROY_COMPLETED
    });
  }

};
