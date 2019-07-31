import {Component} from '@angular/core';
@Component({
  selector: 'app-assignment',
  templateUrl:'./assignment.component.html',
  styleUrls:['./assignment.component.css']
})

export class AssignmentComponent{
  showStat=false;
  count=0;
  array=[];

  onShow(){
    this.count++;
    this.array.push(Date())
   // console.log(this.array);
    if(this.count!%2){
   this.showStat=true;
 
    }
    else
    {
      this.showStat=false;
    }
   
  }

}