import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  Name=""
  rollNo=""
  college=""
  admissionNo=""
  parrentsName=""
  dob=""
  address=""
  mobileNo=""
  parrentsMobileNo=""
  emailId=""
  bloodGroup=""

  readValues=()=>{
    let data ={

  "Name":this.Name,
  "rollNo":this.rollNo,
  "college":this.college,
  "admissionNo":this.admissionNo,
  "parrentsName":this.parrentsName,
  "dob":this.dob,
  "address":this.address,
  "mobileNo":this.mobileNo,
  "parrentsMobileNo":this.parrentsMobileNo,
  "emailId":this.emailId,
  "bloodGroup":this.bloodGroup
    }
    console.log(data)
  }



  ngOnInit(): void {
  }

}
