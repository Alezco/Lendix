import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  loanDuration: DS.attr('number'),
  amount: DS.attr('number'),
  activity: DS.attr('string'),
  rate: DS.attr('number'),
  grade: DS.attr('string'),
  illustration: DS.attr(),
  business: DS.attr()
});
