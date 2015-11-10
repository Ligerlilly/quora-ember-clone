import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'quora-ember-clone/tests/helpers/start-app';

module('Acceptance | question', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /question', function(assert) {
  visit('/');

  andThen(function() {
    click('button.add');
    click('button.signIn');
    fillIn('input.signIn', 'jay@jay.com');
    fillIn("input.password", 'password');
    click('buttn.btn.btn-success');
    assert.equal(find('a.handle').text(), 'jay@jay.com');
  });
});
