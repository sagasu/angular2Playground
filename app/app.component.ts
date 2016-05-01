import {Component} from "angular2/core";
import {ProductListComponent} from "./products/product-list.component";
import {ProductService} from "./products/product.service";
import {HTTP_PROVIDERS} from "angular2/http";

import 'rxjs/Rx'; // load all features, when library is loaded it's javascript is executed loading observable objects.

@Component({
    selector: 'mk-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <mk-products></mk-products>
    </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent{
    pageTitle: string = 'simple angular 2 app'
}