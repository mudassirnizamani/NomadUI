import { Action, createReducer, on } from '@ngrx/store';
import { ILead } from 'src/app/core/models/ILead.interface';
import { getAllLeads } from '../../actions/leads/leads.actions';

export const leadsFeatureKey = 'leads';

export interface LeadsState {
  leads: ReadonlyArray<ILead>;
}

export const initialState: any = {};

export const reducer = createReducer(
  initialState,
  on(getAllLeads, (state) => [...mockLeads()])
);

function mockLeads(): ILead[] {
  const lead: ILead = {
    address: 'asdagfasf',
    assignedTo: 'asfasd',
    city: 'asfjnasd',
    company: 'asfnklsad',
    country: 'asgasd',
    defaultLanguage: 'laskdlmasd',
    description: 'oakspdkasd',
    email: 'asflkiasd',
    id: 'jkasld;asd',
    name: 'klnmaklsfasd',
    phone: 'masd;oasd',
    position: 'asiojiowe',
    province: 'opasdas',
    source: 'iqwoieqwe',
    status: 'lkasdad',
    website: 'ijkasdasd',
    zipCode: 'oijasodasd',
  };

  const lead1: ILead = {
    address: 'asdagfasf',
    assignedTo: 'asfasd',
    city: 'asfjnasd',
    company: 'asfnklsad',
    country: 'asgasd',
    defaultLanguage: 'laskdlmasd',
    description: 'oakspdkasd',
    email: 'asflkiasd',
    id: 'jkasld;asd',
    name: 'klnmaklsfasd',
    phone: 'masd;oasd',
    position: 'asiojiowe',
    province: 'opasdas',
    source: 'iqwoieqwe',
    status: 'lkasdad',
    website: 'ijkasdasd',
    zipCode: 'oijasodasd',
  };

  const lead2: ILead = {
    address: 'asdagfasf',
    assignedTo: 'asfasd',
    city: 'asfjnasd',
    company: 'asfnklsad',
    country: 'asgasd',
    defaultLanguage: 'laskdlmasd',
    description: 'oakspdkasd',
    email: 'asflkiasd',
    id: 'jkasld;asd',
    name: 'klnmaklsfasd',
    phone: 'masd;oasd',
    position: 'asiojiowe',
    province: 'opasdas',
    source: 'iqwoieqwe',
    status: 'lkasdad',
    website: 'ijkasdasd',
    zipCode: 'oijasodasd',
  };
  const lead3: ILead = {
    address: 'asdagfasf',
    assignedTo: 'asfasd',
    city: 'asfjnasd',
    company: 'asfnklsad',
    country: 'asgasd',
    defaultLanguage: 'laskdlmasd',
    description: 'oakspdkasd',
    email: 'asflkiasd',
    id: 'jkasld;asd',
    name: 'klnmaklsfasd',
    phone: 'masd;oasd',
    position: 'asiojiowe',
    province: 'opasdas',
    source: 'iqwoieqwe',
    status: 'lkasdad',
    website: 'ijkasdasd',
    zipCode: 'oijasodasd',
  };

  return [lead, lead1, lead2, lead3];
}
