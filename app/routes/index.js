import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    save(params) {
      var question = this.store.createRecord('question', params);
      question.save();
      this.transitionTo('index');
    }
  }
});
