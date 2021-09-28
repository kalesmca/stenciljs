import { Component, Prop, h } from '@stencil/core';

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


  @Prop() columnHeader = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
  ];

  @Prop() data = [
    { name: 'kaleeswaran', age: 22, id: 1 },
    { name: 'Sundari', age: 21, id: 2 },
    { name: 'Mani', age: 24, id: 3 },
    { name: 'Saravanakumar', age: 22, id: 4 },
    { name: 'Nandhini', age: 31, id: 5 },
    { name: 'Porkodi', age: 54, id: 6 },
    { name: 'Mariappan', age: 62, id: 7 },
    { name: 'Pechiyammal', age: 28, id: 8 },
    { name: 'Muthumanikkam', age: 29, id: 9 },
    { name: 'Suresh', age: 29, id: 10 },
    { name: 'Nithilan', age: 2, id: 11 },
    { name: 'Niranjan', age: 4, id: 12 },
    { name: 'Sahana', age: 2, id: 13 },
    { name: 'ArjunRam', age: 1, id: 14 },
    { name: 'MuthuMani', age: 24, id: 15 },
  ];

  render() {
    return (
      <div>
        <div>
          <basic-table tableData={this.data} tableHeader={this.columnHeader}></basic-table>
          <data-table tableData={this.data} tableHeader={this.columnHeader}></data-table>
        </div>
      </div>
    );
  }
}
