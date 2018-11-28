import { Action } from '@ngrx/store';
import * as types from './action.types';
import { Customer } from '../models/customer.model';

export class loadCustomersAction implements Action {
  readonly type = types.LOAD_CUSTOMERS;
}

export class loadCustomersSuccessAction implements Action {
  readonly type = types.LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: Customer[]) {}
}

export class deleteCustomerAction implements Action {
  readonly type = types.DELETE_CUSTOMER;
  constructor(public payload: number) {}
}

export class deleteCustomerSuccessAction implements Action {
  readonly type = types.DELETE_CUSTOMER_SUCCESS;
  constructor(public payload: number) {}
}

export type Actions =
loadCustomersAction |
loadCustomersSuccessAction |
deleteCustomerAction |
deleteCustomerSuccessAction;
