import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  totalCos;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.totalCos=this.cartService.totalCos;
    this.checkoutForm = this.formBuilder.group({
      email:'',
      name: '',
      address: '',
      address2: '',
      city: '',
      zip: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    console.log(this.cartService.totalCos);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
