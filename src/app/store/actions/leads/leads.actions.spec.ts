import * as fromLeads from './leads.actions';

describe('loadLeadss', () => {
  it('should return an action', () => {
    expect(fromLeads.loadLeadss().type).toBe('[Leads] Load Leadss');
  });
});
