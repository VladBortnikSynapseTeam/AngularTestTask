import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IReview } from 'src/app/core/interfaces/model';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productName: string = "Loading..."
  productTitle: string = "Loading...  "
  reviewsArray:IReview[] = [];
  constructor(private route: ActivatedRoute, private productServie: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productServie.getProducts().subscribe(params => {
        console.log(params);
        
      })
      this.productServie.getProductReview(params['id']).subscribe(reviews => {
        console.log(reviews);
        
        this.reviewsArray = reviews;
      })
    });
    
  }

}
