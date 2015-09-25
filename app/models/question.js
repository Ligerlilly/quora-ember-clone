import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  title: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
