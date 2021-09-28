import { Component, Prop, h, } from '@stencil/core';
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

  @Prop() columnHeader = [{label: "Name", key: 'name'},{label: "Age", key: 'age'}]

  @Prop() data=[
    {name: "kaleeswaran", age:22,id:1},
    {name: "Sundari", age:21,id:2},
    {name: "Mani", age:24,id:3}
  ]

  render() {
    return <div>Hello, World! I'm {this.getText()}
    <div>
      <basic-table tableData={this.data} tableHeader={this.columnHeader}></basic-table>
    </div>
    </div>;
  }
}
