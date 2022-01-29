import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {
  stockData;
  filter: any;
  stockDate: any;

  constructor(private stock : StockService) { }

  search;

  ngOnInit(): void {
  }

  getStock(queryDate : any){

    return this.stock.getStock().subscribe((res)=>{
    this.stockData  = res.data;
    //  console.log(queryDate);
      this.stockData.forEach((element,index,array) => {
        console.log(element.date);

      });



    })
  }

}
