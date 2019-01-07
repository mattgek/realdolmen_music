import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input()
  public items: any[];

  @ContentChild('[carousel-tmpl]', { read: TemplateRef })
  public templateItem: TemplateRef<any>;

  public carretLeft = faAngleLeft;
  public carretRight = faAngleRight;
  public showPreviousBtn: boolean = true;
  public showNextBtn: boolean = true;

  public ngOnInit(): void {
    // todo
  }
}
