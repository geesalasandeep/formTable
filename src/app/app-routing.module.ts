import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"table",component:TableComponent},
  {path:"form",component:FormComponent},
  {path:"stock",component:StockDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
