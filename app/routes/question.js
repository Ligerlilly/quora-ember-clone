import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    delete(question) {
      question.get('answers').forEach(function(answer) {
        answer.destroyRecord();
      });
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      this.transitionTo(question, params.question.id);
      window.location.reload();
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    },
    editAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');
    }
  }
});
