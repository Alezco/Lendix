import Ember from 'ember';

export function getColor(grade) {
  grade = grade + '';
  switch(grade) {
    case 'B':
      return 'green';
    case 'C':
      return 'yellow';
  }
}

export default Ember.Helper.helper(getColor);
