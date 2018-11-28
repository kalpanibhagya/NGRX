import { Customer } from "./customer.model";

export interface AppState {
  readonly customers: Customer[];
}
