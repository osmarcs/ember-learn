import Component from '@ember/component';
import { observer } from '@ember/object'

export default Component.extend({
  myText: '',
  onTextG15: observer('myText', function () {
    const self = this;
    if (self.get('myText').length >= 15) {
      self.sendAction('onMyEvent', self.get('myText'));
    }
  })
});
