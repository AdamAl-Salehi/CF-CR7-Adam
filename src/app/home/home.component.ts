import { Component, OnInit } from '@angular/core';
import { services } from '../services'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services = services;
  constructor() { }

  ngOnInit(): void {
  }

}
