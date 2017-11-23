import { Directive, Input, HostListener } from '@angular/core';

/**
 * Generated class for the LimitToDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[limit-to]' // Attribute selector
})
export class LimitToDirective {
	
	 @Input('limit-to') limitTo;

  constructor() {
    console.log('Hello LimitToDirective Directive');
  }
    //HostListener decorator handle event handlers for input (onKeyPress)
  @HostListener('keypress', ['$event'])
  onkeypress(ev) {
    const limit = +this.limitTo; //convert to number
    // once it reaches the limit set, stop propgating event.
    if (ev.target.value.length === limit) {
      ev.preventDefault();
    }
  }

}
