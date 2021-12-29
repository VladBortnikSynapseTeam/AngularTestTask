import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IReview , IPostReview} from 'src/app/core/interfaces/model';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productName: string = "Loading..."
  productTitle: string = "Loading...  "
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
      this.productServie.getProducts().subscribe(productInfo => {
        productInfo.forEach(info => {
          if(params['id'] == info.id){
            this.productName = info.title;
            this.productTitle = info.text
          }
        })
      })
      this.productServie.getProductReview(params['id']).subscribe(reviews => {
        console.log(reviews);
        
        this.reviewsArray = reviews;
      })
    });
    
  }
  postRate(rateForm: IPostReview){
    let data = {
      rate: +rateForm.rate,
      text: rateForm.text,
      created_by: {
        username: "TestUser"
      }
    }
    if(data.rate == null){
      data.rate = 0;
    }
    console.log(data);
    
    //this.productServie.postRate(data,this.postID).subscribe(data => {console.log(data);})
    this.reviewsArray.push(data);
  }
}
