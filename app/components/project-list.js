import Ember from 'ember';

export default Ember.Component.extend({
  projects: [],

  init() {
    this.getData();
    this._super();
  },

  getData() {
    Ember.$.getJSON('https://api.lendix.com/projects').then(res => {
      this.fillProjects(res);
    });
  },

  fillProjects(res) {
    res.projects.forEach(item => {
      this.get('projects').pushObject({
        name: item.name,
        loanDuration: item.loanDuration,
        amount: item.amount,
        activity: item.activity,
        rate: item.rate,
        grade: item.grade,
        illustration: item.illustration,
        business: item.business,
        country: item.business.address.country.toUpperCase(),
      });
    });
    console.log(this.projects);
  }
});
