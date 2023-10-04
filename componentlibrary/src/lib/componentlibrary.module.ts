import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestcomponentComponent],
  exports: [TestcomponentComponent],
})
export class ComponentlibraryModule {}
