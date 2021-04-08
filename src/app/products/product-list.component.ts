import {Component , OnInit} from '@angular/core';
import { IProduct } from './product';

@Component({
selector : 'pm-products',
templateUrl:'./product-list.component.html',
styleUrls: ['./product-list.component.css']
})

//export class ProductListComponent{
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List !!!! ';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false; 
    private _listFilter: string = '';
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        console.log("In setter:", value);
        this.filteredProducts = this.performFilter(value); 
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [
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
    ];

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct)=>
        product.productName.toLowerCase().includes(filterBy))
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.listFilter = 'cart';
    }

    onRatingClicked(message:string): void{
        this.pageTitle = "Product list " + message;
    }
}