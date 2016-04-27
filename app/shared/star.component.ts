import {Component, OnChanges} from "angular2/core";
@Component({
    selector: 'ai-star',
    templateUrL: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(changes:{}):any {
        this.startWidth = this.rating * 86 /5;
    }
    rating: number = 4;
    startWidth: number;
}