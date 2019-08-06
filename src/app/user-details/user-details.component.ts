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
  num="1";
  stat=true;
  errorMessage="";
  genders=['male','female']

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
  validate(f:NgForm){
    console.log(f.value.userData.number);
    console.log(f.value.userData.email);


  if(f.value.userData.email!='')
    {
      console.log("in if2");

      this.stat=false;
      this.errorMessage="hello my by";
    }
     if(f.value.userData.number!=null && Number(f.value.userData.number)>1) 
    {
      console.log("in if1");
      this.stat=false;
    }

  }

  
  onSubmit(form:NgForm){
    console.log(form.value.userData.email);
    console.log(this.num);

    
    this.arr.push(form.value);
    this.http.put('https://test-7ad23.firebaseio.com/data.json',this.arr).subscribe((responseData)=>{
     console.log(responseData);
    })

  }
}