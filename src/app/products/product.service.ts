import { Injectable } from "@angular/core";
import {IProduct} from './product';


@Injectable()
export class ProductService{

    getProducts():IProduct[] {
        return[
            {
                "productId" : 2,
                "productName" : "Garden csds",
                "productCode" : "sdfsf-343",
                "releaseDate" : "March 18,2021",
                "description" : " Now anyone can buy",
                "price" : 3644.36148,
                "starRating" : 4.2,
                "imageURL" : './assets/images/garden_cart.png'
            },
            {
                "productId" : 5,
                "productName" : "Hammer",
                "productCode" : "HX-343",
                "releaseDate" : "March 30,2021",
                "description" : " Now anyone can buy",
                "price" : 2552.28633,
                "starRating" : 4.3,
                "imageURL" : './assets/images/hammer.png'
                
            }
        ]
    }

}