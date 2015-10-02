import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signUp() {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('signUp', params)
    }
  }
});
