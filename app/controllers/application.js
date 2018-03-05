import Ember from 'ember';

export default Ember.Controller.extend({
  bears: ['grizzly', 'polar', 'brown'],
  actions: {
    addBear: function() {
      let bearName = this.get('bearName');
      this.get('bears').pushObject(bearName);
    }
  }
});
