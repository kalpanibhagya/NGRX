import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-customers-table',
  templateUrl: './cusomers-table.component.html',
  styleUrls: ['./cusomers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {
  @Input() customers: Customer[];
  @Output() delete = new EventEmitter<Customer>();
  constructor() {
  }

  ngOnInit() {
  }

  deleteCustomer(customer: Customer) {
    if(customer && customer.id) {
      if(confirm(`Are you sure want to delete customer ${customer.firstName}`)) {
        this.delete.emit(customer);
      }
    }
  }
}
