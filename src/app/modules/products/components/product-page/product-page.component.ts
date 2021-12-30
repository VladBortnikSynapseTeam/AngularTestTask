import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IPostReview } from 'src/app/core/interfaces/post/post-review.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit,OnDestroy {
  productName: string = "Loading..."
  productTitle: string = "Loading...  "
  destroy$: Subject<boolean> = new Subject<boolean>();
  reviewsArray = [];
  postID = "";
  rateForm: FormGroup = new FormGroup({
    text: new FormControl(),
    rate: new FormControl()
  })
  constructor(private route: ActivatedRoute, private productServie: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postID = params["id"];
      this.getProductItem(params);
    });
    
  }
  getProductItem(params: any){
    forkJoin( [
     this.productServie.getProducts(),
     this.productServie.getProductReview(params['id'])
    ])
    .pipe(takeUntil(this.destroy$))
    .subscribe(([products,reviews]) => {
      this.reviewsArray = reviews;
      products.forEach(info => {
        if(params['id'] == info.id){
          this.productName = info.title;
          this.productTitle = info.text
        }
      })
    },(err)=>{console.log(err);
    })
  }
  postRate(rateForm: IPostReview){
    let data = {
      rate: +rateForm.rate || 0,
      text: rateForm.text,
      created_at: `${new Date()}`,
      created_by: {
        username: "TestUser"
      }
    }
    console.log(data); 
    //this.productServie.postRate(data,this.postID).subscribe(data => {console.log(data);})
    this.reviewsArray.unshift(data);
    this.rateForm.reset();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
