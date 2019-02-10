import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayFormElmentDirective } from './dialog-form.directive';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [DialogComponent, OverlayFormElmentDirective],
  imports: [CommonModule, OverlayModule, FormsModule, ReactiveFormsModule],
  exports: [DialogComponent],
  providers: [DialogService]
})
export class DialogModule {}
