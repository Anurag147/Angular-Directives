import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'//This selector will be placed on any element
})
export class BasicHighlightDirective implements OnInit{
    elementRef:ElementRef;
    constructor(elementRef:ElementRef){ 
        // elementRef stores reference of the element on which this selector is used
        this.elementRef=elementRef;
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
    }
}