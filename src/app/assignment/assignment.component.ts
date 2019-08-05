import {Component,ViewChild,OnInit,ElementRef} from '@angular/core';
@Component({
  selector: 'app-assignment',
  templateUrl:'./assignment.component.html',
  styleUrls:['./assignment.component.css']
})

export class AssignmentComponent implements OnInit{
  showStat=false;
  count=0;
  array=[];
  @ViewChild('ref') xyz:ElementRef;
  stat=true;

  ngOnInit(){
    console.log(this.xyz.nativeElement.value);
  }
  onShow(){
      console.log(this.xyz.nativeElement.value);
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