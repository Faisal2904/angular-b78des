import {Directive,ElementRef,OnInit,Renderer2,HostListener,HostBinding} from '@angular/core';
@Directive({
  selector:'[appHighlight]'
})
export class AppHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgrndColor:string;
  constructor(private elementRef:ElementRef,private renderer:Renderer2){

  }
  ngOnInit(){
    //this.elementRef.nativeElement.style.backgroundColor='green';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
  }
  @HostListener('mouseenter') mouseOver(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
  }

   @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','transparent');

    this.backgrndColor='transparent';
  }

}