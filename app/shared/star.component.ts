import {Component, OnChanges, Input} from "angular2/core";
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(changes:{}):any {
        this.startWidth = this.rating * 86 /5;
    }
    @Input() rating: number;
    startWidth: number;
}