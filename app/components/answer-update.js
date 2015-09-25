import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('updateAnswer', true);
    },
    hideAnswerForm() {
      this.set('updateAnswer', false);
    },
    editAnswer(answer) {
      var params = {
        user: this.get('user'),
        content: this.get('content'),
        createdAt: this.get('createdAt'),
        updatedAt: new Date()
      }
      this.set('updateAnswer', false);
      this.sendAction('editAnswer', answer, params);
    }
  }
});
