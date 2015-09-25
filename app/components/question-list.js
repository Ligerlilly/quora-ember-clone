import Ember from 'ember';

export default Ember.Component.extend({
  sortByDate: ['createdAt:desc'],
  sortedByDateQuestions: Ember.computed.sort('question', 'sortByDate')
});
