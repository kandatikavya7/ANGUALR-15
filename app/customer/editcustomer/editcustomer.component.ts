import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomersService } from 'src/customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css'],
})
export class EditcustomerComponent implements OnInit {
  constructor(
    private customer: CustomersService,
    private router: ActivatedRoute
  ) {}
  editCustomer = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
  });
  message: boolean = false;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
  
    this.customer
  .getCustomerById(this.router.snapshot.params['id'])
  .subscribe((result: any) => {
    console.log(result);
        this.editCustomer.setValue({
          firstName: result['firstName'],
          lastName: result['lastName'],
          gender: result['gender'],
          address: result['address'],
          city: result['city'],
          state: result['state'],
        });
      });
  }

  UpdateData() {
    // console.log(this.editCustomer.value);
    this.customer.updateCustomerData(this.router.snapshot.params['id'],this.editCustomer.value).subscribe((result)=>{
      // console.log(result);
      this.message=true;
      this.editCustomer.reset({});
    })
  
  
    
  }

  // UpdateData() {
  //   console.log(this.editCustomer.value);
  //   const customerId = this.router.snapshot.params['id'].toString();
  
  //   this.customer.updateCustomerData(customerId, this.editCustomer.value).subscribe((result) => {
  //     console.log(result);
  //   });
  // }
}
