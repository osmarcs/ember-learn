import Route from '@ember/routing/route';

export default Route.extend({
  model: () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
  },
  willTransition: function() {
    window.console.log('Init transition');
  },
  didTransition: function() {

  }

});
