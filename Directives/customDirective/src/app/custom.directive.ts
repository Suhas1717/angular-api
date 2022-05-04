import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter(){ 
    this.highlight(this.appCustom || this.defaultColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }


  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() appCustom = '';

  @Input() defaultColor = '';


} 
