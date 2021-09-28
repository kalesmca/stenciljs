import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  @State() title: string = "Sai Blood Bank";

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }


  render() {
    return (<div>
      <h1>Title : {this.title}</h1>
      Hello, World! I'm {this.getText()} :
      <div>
         <input value={this.title} onInput={(e)=>{this.title = (e.target as HTMLInputElement).value}}/>
         </div>
         </div>)
  }
}
