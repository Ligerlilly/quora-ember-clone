import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if(confirm('Are you sure?')){
        this.sendAction('delete', question);
      }
    },
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    deleteAnswer(answer) {
      if(confirm('Are you sure?')) {
        this.sendAction('deleteAnswer', answer);
      }
    },
    editAnswer(answer, params) {
      this.sendAction('editAnswer', answer, params);
    }
  }
});
