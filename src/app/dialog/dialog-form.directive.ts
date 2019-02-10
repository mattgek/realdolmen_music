import { Directive, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appFormElement]'
})
export class OverlayFormElmentDirective implements OnInit, OnDestroy {
  @HostBinding('class.form-field--is-active')
  public isActive: boolean = false;

  @HostBinding('class.form-field--is-filled')
  public isFilled: boolean = false;

  private onBlurSubscription: Subscription;
  private onFocusSubscription: Subscription;

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    this.onBlurSubscription = fromEvent(this.el.nativeElement, 'blur').subscribe(() =>
      this.setActive(this.el, false)
    );

    this.onFocusSubscription = fromEvent(this.el.nativeElement, 'focus').subscribe(() =>
      this.setActive(this.el, true)
    );
  }

  public ngOnDestroy() {
    this.onBlurSubscription.unsubscribe();
    this.onFocusSubscription.unsubscribe();
  }

  private setActive(el, active) {
    // TODO: need a better way to fix this issue
    const formField = el.nativeElement.parentNode.parentNode;
    if (active) {
      formField.classList.add('form-field--is-active');
    } else {
      formField.classList.remove('form-field--is-active');
      el.nativeElement.value === ''
        ? formField.classList.remove('form-field--is-filled')
        : formField.classList.add('form-field--is-filled');
    }
  }
}
