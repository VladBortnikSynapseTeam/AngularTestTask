import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { IProduct } from '../core/interfaces/model';
import { IReview } from '../core/interfaces/model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
  }
  
  getProducts(){
   return this.http.get<IProduct[]>('http://smktesting.herokuapp.com/api/products');
  }
  getProductReview(id: string){
    return this.http.get<IReview[]>(`http://smktesting.herokuapp.com/api/reviews/${id}`)
  }
}
