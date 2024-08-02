import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from './product-mock';
import { Product } from '@entities/product/model/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor() {}

    getProductsBySlug(): Observable<Product[]> {
        return of(products);
    }
}
