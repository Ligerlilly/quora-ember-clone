import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  question: DS.belongsTo('question',  { async: true })
});
