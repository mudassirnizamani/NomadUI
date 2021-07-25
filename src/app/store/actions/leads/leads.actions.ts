import { createAction, props } from '@ngrx/store';
import { ILead } from 'src/app/core/models/ILead.interface';

export const getAllLeads = createAction('[Leads] Get All Leads');

export const getAllLeadSuccess = createAction(
  '[Leads] Get All Leads Success',
  props<{ leads: ILead[] }>()
);
