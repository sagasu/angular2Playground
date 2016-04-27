import {PipeTransform, Pipe} from "angular2/core";
import {IProduct} from "./product";

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{

    transform(value:IProduct, args:any[]): IProduct[] {
        let a :string = args[0] ? args[0].toLocaleLowerCase() : null;
        // filter is a method from array object arr.filter
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        return a ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(a) != -1) : value;
    }

}