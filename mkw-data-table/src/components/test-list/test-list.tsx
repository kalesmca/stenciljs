import {Component, h, Prop, State, Watch} from '@stencil/core'

@Component({
  tag: 'test-list',
  styleUrl: './test-list.css',
  shadow:true
})

export class ListComponent {
  @Prop({mutable:true}) options: string= "";

  @State() updatedList : Array<any> = [];

  componentWillLoad() {
    debugger
    this.updateOptions(this.options);
  }

  @Watch('options')
  updateOptions(newValue: string) {
    if(newValue){
      this.updatedList = JSON.parse(newValue)
    }
    console.log('upda:', this.updatedList)
  }
  render(){
    return(
      <div>List Component</div>
    )
  }
}
