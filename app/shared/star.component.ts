import {Component, OnChanges, Input} from "angular2/core";
import {startWith} from "rxjs/operator/startWith";
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    startWidth: number;

    ngOnChanges(changes:{}):any {
        this.startWidth = this.rating * 86 /5;
        console.debug(this.startWidth.toString());
    }

}