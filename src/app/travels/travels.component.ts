import { Component, OnInit } from '@angular/core';
import { travOffers } from '../travOffers';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css'],
})
export class TravelsComponent implements OnInit {
  travOffers = travOffers;
  selectedItem;

  selectedItemFun(item) {
    this.selectedItem = item;
  }

  addToCart(selectedItem) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(selectedItem);
  }
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
