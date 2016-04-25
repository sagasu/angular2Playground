import {Component} from "angular2/core";
import {ProductListComponent} from "./products/product-list.component";

@Component({
    selector: 'mk-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <mk-products></mk-products>
    </div>
    `,
    directives: [ProductListComponent]
})
export class AppComponent{
    pageTitle: string = 'simple angular 2 app'
}