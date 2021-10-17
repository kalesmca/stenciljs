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
    { label: 'Name', key: 'name', isSorting:true},
    { label: 'Age', key: 'age', isSorting:true },
    { label: 'City', key: 'city', isSorting:true},
  ];

  @Prop() data = [
    { name: 'kaleeswaran', age: 22,city:"Rajapalayam", id: 1 },
    { name: 'Sundari', age: 21,city:"Muhavoor", id: 2 },
    { name: 'Mani', age: 24,city:"Aavadi", id: 3 },
    { name: 'Saravanakumar', age: 22,city:"Hosur", id: 4 },
    { name: 'Nandhini', age: 31,city:"DPM", id: 5 },
    { name: 'Porkodi', age: 54, city:"Krishnapuram", id: 6 },
    { name: 'Mariappan', age: 62, city:"Settur", id: 7 },
    { name: 'Pechiyammal', age: 28, city:"vellayangiri", id: 8 },
    { name: 'Muthumanikkam', age: 29, city:"Aaladipatti", id: 9 },
    { name: 'Suresh', age: 29, city:"Madathur",id: 10 },
    { name: 'Nithilan', age: 2, city:"Trivandrum",id: 11 },
    { name: 'Niranjan', age: 4, city:"kochi",id: 12 },
    { name: 'Sahana', age: 2, city:"kottayam",id: 13 },
    { name: 'ArjunRam', age: 1, city:"sivagiri",id: 14 },
    { name: 'MuthuMani', age: 24, city:"Madurai",id: 15 },
    { name: 'sas', age: 33,city:"Bangalore", id: 16 },
  ];

  render() {
    return (
      <div>
        <div>
          {/* <basic-table data={JSON.stringify(this.data)} header={JSON.stringify(this.columnHeader)}></basic-table> */}
          <data-table data={JSON.stringify(this.data)} header={JSON.stringify(this.columnHeader)}></data-table>
        </div>
      </div>
    );
  }
}
