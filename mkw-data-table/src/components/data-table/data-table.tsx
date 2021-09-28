import {Component, Prop, h, State} from '@stencil/core';

@Component({
  tag: 'data-table',
  styleUrl:'./data-table.css',
  shadow:true
})

export class DataTable {

  @Prop({mutable:true}) tableData: any = [];

  @Prop({mutable:true}) tableHeader: any = [];

  @State() currentIndex : number = 1;

  @State() startFrom : number = 0;

  @Prop({mutable:true}) pageLimit = 5;

  getNextData = () =>{
    debugger
    if((this.startFrom + this.pageLimit) < this.tableData.length){
      this.startFrom = this.startFrom + this.pageLimit;
    }
  }

  getPreviousData = () => {
    if(this.startFrom){
      this.startFrom = this.startFrom - this.pageLimit;
    }
  }

  render(){
    let tableBodyItems = [];
    for (let i = this.startFrom; i < (this.startFrom + this.pageLimit) ; i++) {
      tableBodyItems.push(<tr>
        <td>{i+1}</td>
        <td>{this.tableData[i].name}</td>
        <td>{this.tableData[i].age}</td>
      </tr>);
    }
    return (
      <div>
        Data Table
        <table>
          <thead>
            <tr>
              <th>ID</th>
              {this.tableHeader.map((header, headerIndex) => {
                return <th key={headerIndex}>{header.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {/* {
              this.tableData.map((data, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                  </tr>
                )
              })
            } */}
            {tableBodyItems}

          </tbody>
        </table>
        <button
          onClick={() => {
            this.getPreviousData();
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            this.getNextData();
          }}
        >
          {' '}
          Next
        </button>
      </div>
    );
  }
}
