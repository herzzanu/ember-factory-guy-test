import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('user', {

  default: {
    name: (f) => `name-${f.id}`,
    email: (f) => `user-${f.id}@test.com`,
  }
});
