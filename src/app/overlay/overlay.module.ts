import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayFormElmentDirective } from './overlay-form.directive';
import { OverlayComponent } from './overlay.component';
import { OverlayService } from './overlay.service';

@NgModule({
  declarations: [OverlayComponent, OverlayFormElmentDirective],
  imports: [CommonModule, OverlayModule, FormsModule, ReactiveFormsModule],
  exports: [OverlayComponent],
  providers: [OverlayService]
})
export class OverLayModule {}
