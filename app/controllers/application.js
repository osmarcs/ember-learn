import Controller from '@ember/controller';
import  { computed, observer } from '@ember/object';

export default Controller.extend({
  firstName: 'Alesk',
  lastName: 'Tks',
  fullName: computed('firstName', 'lastName', function () {
    return `${this.get('lastName')}, ${this.get('firstName')}`;
  }),
  onFullNameChange: observer('fullName', function() {
   window.console.log('full name changed');
  }),
  canShow: false,
  init() {
    this._super(...arguments);
    this.myList =  [
      {name: 'Margareth', age: 19},
      {name: 'Hector', age: 18},
      {name: 'Violet', age: 14}
    ];
    this.myNumbers = {
      even: [2,4,6],
      odd: [1,3,5]
    }
  },
  actions: {
    toggleShow: function () {
      this.toggleProperty('canShow');
    }
  }
});
