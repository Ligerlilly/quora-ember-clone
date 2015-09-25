import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('newQuestion', true);
    },
    hideQuestionForm() {
      this.set('newQuestion', false);
    },
    save() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        content: this.get('content'),
        createdAt: new Date(),
        updatedAt: ''
      };
      this.set('newQuestion', false);
      this.sendAction('save', params);
    }
  }
});
