import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {

  //Reference to the template
  templateRef:TemplateRef<any>;

  //View Container reference
  vcRef:ViewContainerRef;

  //Property binding name should be same to selector name
  @Input() set appUnless(condition: boolean){
    //use property setter to execute whenever the property changes
    if(!condition){
      //Create the embedded view when condition is not matched
    this.vcRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.vcRef.clear();
    }
  }
  constructor(templateRef:TemplateRef<any>,vcRef:ViewContainerRef) {
    this.templateRef=templateRef;
    this.vcRef=vcRef;
   }
}
