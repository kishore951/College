import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor() { }
  admissionNo=""

  readValues=()=>{
    let data ={
      "admissionNo":this.admissionNo
    }
    console.log(data)
  }
    
  ngOnInit(): void {
  }

}
