import { Injectable } from '@angular/core';


@Injectable({
 providedIn: 'root'
})
export class CartService {
 items = [];
 totalCos:number=0;
 constructor() { }

 addToCart(item) {
   this.items.push(item);
   this.totalCos+=item.price;
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   this.totalCos=0;
   return this.items;
   
 }
}