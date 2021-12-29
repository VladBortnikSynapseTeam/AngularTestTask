import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPostReview, IProduct, IReview, IPostReviewResponse } from '../core/interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
  }
  
  getProducts(){
   return this.http.get<IProduct[]>(environment.getProducts);
  }
  getProductReview(id: string){
    return this.http.get<IReview[]>(`http://smktesting.herokuapp.com/api/reviews/${id}`)
  }
  postRate(data: IPostReview, postID: string){
    return this.http.post(`http://smktesting.herokuapp.com/api/reviews/${postID}`, data)
  }
}
