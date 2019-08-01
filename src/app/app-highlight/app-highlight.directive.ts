import {Directive,ElementRef,OnInit,Renderer2,HostListener,HostBinding,Input} from '@angular/core';
@Directive({
  selector:'[appHighlight]'
})
export class AppHighlightDirective implements OnInit{
  @Input() dcolor:string='blue';
  @Input() hcolor:string='transparent';


  @HostBinding('style.backgroundColor') backgrndColor:string=this.hcolor;
  constructor(private elementRef:ElementRef,private renderer:Renderer2){

  }
  ngOnInit(){
    //this.elementRef.nativeElement.style.backgroundColor='green';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
  }
  @HostListener('mouseenter') mouseOver(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color',this.color);

    this.backgrndColor=this.dcolor;

  }

   @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','transparent');

    this.backgrndColor=this.hcolor;
  }

}