import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
      console.log("product list works");
      
  }
  removeToken(){
    localStorage.clear();
  }
}
