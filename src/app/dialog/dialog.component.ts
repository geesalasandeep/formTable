import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  profile:  FormGroup;
  id: any;
  employeeName: any;
  empEmail: any;
  PhoneNumber: any;
  empId: any;
  row;





  dataSource = new MatTableDataSource();
  tableData: any;
  newid: any;
  editId: any;

  constructor(private fb : FormBuilder,
      private talk : TalkService,
      private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.profile = this.fb.group({
      empId:[''],
      employeeName:[''],
      PhoneNumber:[''],
      empEmail:['']
      });





  }

  edit1(){
    console.log(this.profile.value);

  }


  edit(newid) {

    this.dataSource = new MatTableDataSource();
    this.talk.edit(this.profile.value,newid).subscribe((res) => {
      let i;
      console.log(res);

      this.tableData.forEach((e, index) => {
         if(e.empId === newid){
           i = index;
          console.log(res);

          }
      });
      this.tableData.slice(i,0,this.profile.value);
      this.dataSource.data = this.tableData;
    })
  }
}
