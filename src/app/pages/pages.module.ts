import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterappComponent } from './waiterapp/waiterapp.component';
import { TablesComponent } from './tables/tables.component';
import { DishesComponent } from './dishes/dishes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    WaiterappComponent,
    TablesComponent,
    DishesComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  exports:[
    WaiterappComponent,
    TablesComponent,
    DishesComponent
  ]
})
export class PagesModule { }
