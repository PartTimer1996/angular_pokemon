import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCccardhover]'
})
export class CccardhoverDirective {

  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // renderer.addClass(el.nativeElement, 'background-grey');
   }

   @HostListener('mouseover') onMouseOver() {
     const part = this.el.nativeElement.querySelector('.pokemon');
     this.renderer.setStyle(part, 'background-color', '#5DADE2');
     this.ishovering = true;

  }

  @HostListener('mouseout') onMouseOut() {
    const part = this.el.nativeElement.querySelector('.pokemon');
    this.renderer.setStyle(part, 'background-color', 'white');
    this.ishovering = false;
  }
}
