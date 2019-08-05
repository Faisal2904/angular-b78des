import {Component,OnInit} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{NgForm} from '@angular/forms';
import{map} from 'rxjs/operators';
@Component({
  selector: 'app-user-details',
  templateUrl:'./user-details.component.html',
  styleUrls:['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{
  arr=[];
  ide="data.json";

  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.http.get("https://test-7ad23.firebaseio.com/"+this.ide)
    // .pipe(map((storedData)=>{
    //     for(const key in storedData){
    //     if(storedData.hasOwnProperty(key)){
    //      this.arr.push({...storedData[key],id:key});
    //     }
        
    //   }

    // }))
    .subscribe((storedData)=>{
      //console.log(storedData);
      
      console.log("hello2",storedData[0].secret)
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