import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {


  constructor(private element: ElementRef,
   private renderer: Renderer2) {

    }

    @HostListener('mouseover')  over() {
      this.hover(true);
     }

    @HostListener('mouseout')  out() {
      this.hover(false);
     }


    hover(status: boolean) {

      if (status) {

        this.renderer.setStyle(
              this.element.nativeElement,
              'text-decoration' , 'underline');
      } else {
          this.renderer.setStyle(
          this.element.nativeElement,
          'text-decoration' , 'none');
      }
    }

}
