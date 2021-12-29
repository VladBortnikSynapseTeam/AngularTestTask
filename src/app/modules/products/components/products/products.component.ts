import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      console.log(products);
      this.productList = products;
    });
  }

}
