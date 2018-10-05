import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

type Orientation = 'prev' | 'next' | 'none';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('friendAnimation', [
      transition(
        'void => prev', // ---> Entering --->
        [
          // In order to maintain a zIndex of 2 throughout the ENTIRE
          // animation (but not after the animation), we have to define it
          // in both the initial and target styles. Unfortunately, this
          // means that we ALSO have to define target values for the rest
          // of the styles, which we wouldn't normally have to.
          style({
            left: -100,
            opacity: 0.0,
            zIndex: 2
          }),
          animate(
            '200ms ease-in-out',
            style({
              left: 0,
              opacity: 1.0,
              zIndex: 2
            })
          )
        ]
      ),
      transition(
        'prev => void', // ---> Leaving --->
        [
          animate(
            '200ms ease-in-out',
            style({
              left: 100,
              opacity: 0.0
            })
          )
        ]
      ),
      transition(
        'void => next', // <--- Entering <---
        [
          // In order to maintain a zIndex of 2 throughout the ENTIRE
          // animation (but not after the animation), we have to define it
          // in both the initial and target styles. Unfortunately, this
          // means that we ALSO have to define target values for the rest
          // of the styles, which we wouldn't normally have to.
          style({
            left: 100,
            opacity: 0.0,
            zIndex: 2
          }),
          animate(
            '200ms ease-in-out',
            style({
              left: 0,
              opacity: 1.0,
              zIndex: 2
            })
          )
        ]
      ),
      transition(
        'next => void', // <--- Leaving <---
        [
          animate(
            '200ms ease-in-out',
            style({
              left: -100,
              opacity: 0.0
            })
          )
        ]
      )
    ])
  ]
})
export class CarouselComponent implements OnInit {
  public carretLeft = faAngleLeft;
  public carretRight = faAngleRight;
  public showPreviousBtn: boolean;
  public slideAction: Orientation;
  public currentAlbum: number;

  // constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.slideAction = 'none';
    this.currentAlbum = 0;
  }

  public nextItem() {
    // this.showPreviousBtn = true;
    // // Change the "state" for our animation trigger.
    // this.slideAction = 'next';
    // // Force the Template to apply the new animation state before we actually
    // // change the rendered element view-model. If we don't force a change-detection,
    // // the new [@orientation] state won't be applied prior to the "leave" transition;
    // // which means that we won't be leaving from the "expected" state.
    // this.changeDetectorRef.detectChanges();
    // // Find the currently selected index.
    // var index = this.friends.indexOf(this.selectedFriend);
    // // Move the rendered element to the next index - this will cause the current item
    // // to enter the ( "next" => "void" ) transition and this new item to enter the
    // // ( "void" => "next" ) transition.
    // this.selectedFriend = this.friends[index + 1] ? this.friends[index + 1] : this.friends[0];
  }

  public previousItem() {
    // this.slideAction = 'previousItem';
    // // Change the "state" for our animation trigger.
    // this.orientation = 'prev';
    // // Force the Template to apply the new animation state before we actually
    // // change the rendered element view-model. If we don't force a change-detection,
    // // the new [@orientation] state won't be applied prior to the "leave" transition;
    // // which means that we won't be leaving from the "expected" state.
    // this.changeDetectorRef.detectChanges();
    // // Find the currently selected index.
    // var index = this.friends.indexOf(this.selectedFriend);
    // // Move the rendered element to the previous index - this will cause the current
    // // item to enter the ( "prev" => "void" ) transition and this new item to enter
    // // the ( "void" => "prev" ) transition.
    // this.selectedFriend = this.friends[index - 1]
    //   ? this.friends[index - 1]
    //   : this.friends[this.friends.length - 1];
  }
}
