import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('updateQuestion', true);
    },
    hideQuestionForm() {
      this.set('updateQuestion', false);
    },
    update(question) {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        content: this.get('content'),
        createdAt: this.get('createdAt'),
        updatedAt: new Date()
      }
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
