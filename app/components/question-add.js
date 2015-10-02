import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    showQuestionForm() {
      if (this.get('session.isAuthenticated') !== true) {
        $("#login").modal()
      }
      else {
        this.set('newQuestion', true);
      }



    },
    hideQuestionForm() {
      this.set('newQuestion', false);
    },
    save() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        content: this.get('content'),
        author: this.get('session.currentUser.email'),
        createdAt: new Date(),
        updatedAt: ''
      };
      this.set('newQuestion', false);
      this.sendAction('save', params);
    }
  }
});
