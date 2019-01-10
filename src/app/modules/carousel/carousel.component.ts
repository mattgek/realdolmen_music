import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @Input()
  public items: any[];

  @Input()
  public templateItem: TemplateRef<any>;

  @ViewChildren('carouselItem')
  public children: QueryList<any>;

  // icons
  public carretLeft = faAngleLeft;
  public carretRight = faAngleRight;

  // arrow buttons
  public showPreviousBtn: boolean;
  public showNextBtn: boolean;

  // index
  public indexItem: number = 0;

  @ViewChild('carouselContainer')
  private container: ElementRef;

  public ngAfterViewInit() {
    this.calculateButtons();
  }

  public scrollLeft() {
    const elemNotCompletelyVisible = this.getFirstElementNotInView(false);
    if (elemNotCompletelyVisible) {
      this.container.nativeElement.scrollLeft = elemNotCompletelyVisible.getBoundingClientRect().left;
      this.setIndexItem(elemNotCompletelyVisible);
      this.calculateButtons();
    }
  }

  public scrollRight() {
    const elemNotCompletelyVisible = this.getFirstElementNotInView(true);
    if (elemNotCompletelyVisible) {
      this.container.nativeElement.scrollLeft = elemNotCompletelyVisible.getBoundingClientRect().left;
      this.setIndexItem(elemNotCompletelyVisible);
      this.calculateButtons();
    }
  }

  private getFirstElementNotInView(right: boolean): HTMLElement {
    const direction = right ? +1 : -1;
    const loop = right ? (index) => index < this.children.length : (index) => index > 0;

    const children = this.children.toArray();
    const rectContainer = this.container.nativeElement.getBoundingClientRect();

    const leftPointContainer = rectContainer.left;
    const rightPointContainer = rectContainer.left + rectContainer.width;
    for (let index = this.indexItem; loop(index); index = index + direction) {
      const childElem = children[index];
      const elem: HTMLElement = childElem.nativeElement;
      const rectElem = elem.getBoundingClientRect();
      if (right && rectElem.left + rectElem.width > rightPointContainer) {
        return elem;
      } else if (!right && rectElem.left < leftPointContainer) {
        return elem;
      }
    }
    return undefined;
  }

  private setIndexItem(elem: HTMLElement): void {
    const children = this.children.toArray().map((x) => x.nativeElement);
    const i = children.indexOf(elem);
    this.indexItem = i > -1 ? i : 0;
  }

  private calculateButtons(): void {
    setTimeout(() => {
      const itemRightNotInView = this.getFirstElementNotInView(true);
      const itemLeftNotInView = this.getFirstElementNotInView(false);
      this.showNextBtn = !!itemRightNotInView;
      this.showPreviousBtn = !!itemLeftNotInView;
    }, 1000);
  }
}
