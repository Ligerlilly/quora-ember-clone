import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    showAnswerForm() {
      if (this.get('session.isAuthenticated') !== true) {
        $("#login").modal()
      }
      else {
        this.set('newAnswer', true);
      }
    },
    hideAnswerForm() {
      this.set('newAnswer', false);
    },
    saveAnswer() {
      var params = {
        question: this.get('question'),
        user: this.get('user'),
        content: this.get('content'),
        createdAt: new Date(),
        updatedAt: ''
      };
      this.set('newAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
