import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces/product/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  productList: IProduct[] = [];
  dataSource:IProduct[] = [];
  displayedColumns: string[] = ['productName','description', 'actions'];
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe(products => {
      console.log(products);
      this.productList = products;
      this.dataSource = this.productList;
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
