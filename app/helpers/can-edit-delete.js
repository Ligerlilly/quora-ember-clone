import Ember from 'ember';

export function canEditDelete(params) {
  if (params[0].get('author') === params[1]) {
    return true
  }
  //return params;
}

export default Ember.Helper.helper(canEditDelete);
