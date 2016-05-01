import {Component, OnInit} from "angular2/core";
import {IProduct} from "./product";
import {ProductFilterPipe} from "./product-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {ProductService} from "./product.service";

@Component({
    selector: 'mk-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit {

    // you don't need to specify a default value - here default value is 'Product list'
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    // any is any type
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){

    }

    ngOnInit():any {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                       error => this.errorMessage = <any>error);
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    onRatingClicked(message: string): void{
        this.pageTitle = "Product List" + message;
    }
}