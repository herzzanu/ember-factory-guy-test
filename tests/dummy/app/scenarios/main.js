import { Scenario } from 'ember-data-factory-guy';

Scenario.settings({
  logLevel: 1 // 0 to turn off logging
});

export default class extends Scenario {
  run() {
    let user = this.build('user');
    this.mockFindRecord('user').returns({json: user});
    //this.include([]);
  }
}
