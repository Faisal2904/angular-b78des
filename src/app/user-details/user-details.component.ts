import {Component,OnInit} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-user-details',
  templateUrl:'./user-details.component.html',
  styleUrls:['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{
  arr=[];

  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.http.get('https://test-7ad23.firebaseio.com/data.json').subscribe((storedData)=>{
      console.log(storedData);
    })

  }
  onSubmit(form:NgForm){
    console.log(form.value)
    this.arr.push(form.value);
    this.http.put('https://test-7ad23.firebaseio.com/data.json',this.arr).subscribe((responseData)=>{
     console.log(responseData);
    })

  }
}