import Component from '@ember/component';

export default Component.extend({
  bears: [],
  actions: {
    addBear: function() {
      let bearName = this.get('bearName');
      this.get('bears').pushObject(bearName);
    },
    saveBears: function () {
      this.sendAction('action', this.get('bears'));
    }
  }
});
