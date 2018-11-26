import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {ProductDTO} from "../models/product.dto";
import {API_CONFIG} from "../config/api.config";

@Injectable()
export class ProductService {

  public headers: HttpHeaders;

  constructor(public http: HttpClient) {
  }

  findAll(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(`${API_CONFIG.baseUrl}/product/`);
  }
}