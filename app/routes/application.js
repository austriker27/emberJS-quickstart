import Route from '@ember/routing/route';

export default Route.extend({
  model: function(){
    return $.get('bears.json');
  },
  actions: {
    storeTheBears: function (bears) {
      $.post('/api/bears', bears);
    }
  }
});
