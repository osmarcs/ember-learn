import Controller from '@ember/controller';

export default Controller.extend({
  firstName: 'Alesk',
  lastName: 'Tks',
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
  }
});
