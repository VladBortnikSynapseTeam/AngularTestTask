import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces/model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
      console.log("product list works");
      
  }
  removeToken(){
    localStorage.clear();
  }
}
