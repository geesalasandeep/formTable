import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit,AfterContentChecked {

  storedTheme : string;
  products: any;
  message: string;
  error: string;

  constructor(private prod : StockService) { }


  ngOnInit(): void {
    this.getAllProducts();
  }

  ngAfterContentChecked(): void {
    this.storedTheme  = localStorage.getItem('theme-color')
  }

  getAllProducts(){
    this.prod.getProducts().subscribe((res)=>{
      if(!res.error){
        this.message = 'products fetched'
        this.products = res.products;
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
      else{
        this.error = "could not fetch the products";
      }
    }, err =>{
      this.error = 'server error'
    })
  }




}
