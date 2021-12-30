import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPostReview, IReview } from '../core/interfaces/post/post-review.model';
import {IProduct} from '../core/interfaces/product/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
  }
  
  getProducts(){
   return this.http.get<IProduct[]>(`${environment.apiURL}/products/`);
  }
  getProductReview(id: string){
    return this.http.get<IReview[]>(`${environment.apiURL}/reviews/${id}`)
  }
  postRate(data: IPostReview, postID: string){
    return this.http.post(`${environment.apiURL}/reviews/${postID}`, data)
  }
}
