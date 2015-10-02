import Ember from 'ember';

export function canEditDelete(params) {
  //debugger;
  if (params[0] === params[1]) {
    return true
  }
  //return params;
}

export default Ember.Helper.helper(canEditDelete);
