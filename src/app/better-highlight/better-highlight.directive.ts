import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

//This class demonstrates better way of using directices using renderer
export class BetterHighlightDirective implements OnInit {
  
  //Below custom properties are used to handle the directive values outside from the directives
  //So Input properties is used
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  //HostBinding is another way of accessing element without a renderer.
  //style.backgroundColor tells DOM to access background-color property of the element.
  @HostBinding('style.backgroundColor') backgroundColor:string;;

  renderer:Renderer2;
  elementReference:ElementRef

  constructor(renderer:Renderer2, elementReference:ElementRef) {
    this.renderer=renderer;
    this.elementReference=elementReference;
   }

   ngOnInit(){
     this.backgroundColor=this.defaultColor;
        //Below styling is set using renderer because changing dom property directly is not a best method
        //Instead renderer takes reference of the element and changes it as mentioned below.
        //This can be used when we are not using host binding technique
        //this.renderer.setStyle(this.elementReference.nativeElement,'background-color','blue');
   }

   //Change background color of the element when hover over it
   //Hostlistener is used to respond to DOM events
   //mouseover is a DOM event name when we hover over an element
   @HostListener('mouseover') mouseover(eventData:Event){
    //Using renderer way
    //this.renderer.setStyle(this.elementReference.nativeElement,'background-color','pink');

    //using host binding way
    this.backgroundColor = this.highlightColor;
   }

   //Change background color of the element when hover over out
   //Hostlistener is used to respond to DOM events
   //mouseleave is a DOM event name when we leave an element
   @HostListener('mouseleave') mouseleave(eventData:Event){
    //Using renderer way
    //this.renderer.setStyle(this.elementReference.nativeElement,'background-color','blue');
    //using host binding way
    this.backgroundColor = this.defaultColor;
   }
}
