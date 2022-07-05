import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { TalkService } from '../talk.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,AfterContentChecked {
click = false ;
  // details;
  list;
  id;
  profile: FormGroup;
  data : Form[]  = [];
  matRowDef;
  deleteId;
  tableData;
  newid;

  editId:FormControl;

  @ViewChild(MatPaginator,{static:true}) paginator : MatPaginator;


  dataSource = new MatTableDataSource();
  displayedColumns = [
    'employeeName',
    'empId',
    'empEmail',
    'PhoneNumber',
    // 'edit',
    // 'delete'
  ]
  empEmail: any;
  employeeName: any;
  PhoneNumber: any;
  empId: any;
  storedTheme;
  // storedTheme : string = localStorage.getItem('theme-color');

  constructor(private talk: TalkService ,
              public dialog : MatDialog,
              private route : Router) { }

  ngOnInit(): void {



    this.getDetails()
    // this.newid = this.editId
    this.dataSource.paginator=this.paginator

  }

  ngAfterContentChecked(): void {
    this.storedTheme  = localStorage.getItem('theme-color')
  }


  getDetails() {
    return this.talk.getDetails().subscribe((res) => {
      // this.details = res;
      this.tableData = res
      this.dataSource.data = this.tableData;
      // console.log(res);

    })
  }

  openDialog(row){
    // this.click != this.click;

    // this.dialog.open(DialogComponent,row );
  }

 edit(editId){
   this.route.navigate(['form'],{
     queryParams:{
       id:editId
     }
   })
 }


  add(){
    const newObj = {
      id: this.id,
      employeeName: this.employeeName,
      empEmail: this.empEmail,
      PhoneNumber: this.PhoneNumber,
      empId: this.empId
    }
    this.talk.post(newObj).subscribe((res)=>{
      console.log(res);
   })
  }

  delete(deleteId) {
    this.dataSource = new MatTableDataSource();
    this.talk.delete(deleteId).subscribe((res) => {
      let i;
      this.tableData.forEach((e, index) => {
         if(e.empId === deleteId){
           i = index;
         }
      });
      this.tableData.splice(i,1);
      this.dataSource.data = this.tableData;
    })
  }
  logData(row) {
    // console.log(this.profile.value);
    console.log(row);

    this.editId = row.id
 }
}
