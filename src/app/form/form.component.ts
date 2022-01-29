import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule, FormGroup, NgForm, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profile:  FormGroup;
  id: any;
  employeeName: any;
  empEmail: any;
  PhoneNumber: any;
  empId: any;
  editId: any;

  constructor
  (
    private fb : FormBuilder,
    private talk : TalkService,
    private router : ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.profile = this.fb.group({
      empId:[''],
      employeeName:[''],
      PhoneNumber:[''],
      empEmail:[''],
      Skill : this.fb.array([this.initializeSkill()])
    });

    this.router.queryParams.subscribe(res=>{
      this.editId = res?.id;
      if(this.editId){
        this.talk.getEmpData(this.editId).subscribe(res=>{
          this.profile.get('empId').patchValue(res?.empId),
          this.profile.get('employeeName').patchValue(res?.employeeName),
          this.profile.get('empEmail').patchValue(res?.empEmail),
          this.profile.get('PhoneNumber').patchValue(res?.PhoneNumber)

        })
      }
    })



  }


  onSubmit(){
      this.talk.post(this.profile.value).subscribe((res)=>{
      // console.log(res);
     })
 }

 initializeSkill() : FormGroup{
   return this.fb.group({
     skills : [''],
     profinecy : [''],
     exp : ['']
   })
 }

  get skillControls(): FormArray{
    return this.profile.get('Skill') as FormArray;
  }

  addSkill(){
    this.skillControls.push(this.initializeSkill());
  }

  delete(i){
    this.skillControls.removeAt(i);
  }

  edit(){
    this.talk.edit(this.profile.value,this.editId).subscribe(res =>{
      console.log(res);

    })
  }




}
