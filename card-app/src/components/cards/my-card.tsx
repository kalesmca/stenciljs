import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {

  @Prop({ mutable: true }) header: string = "Header"

  @Prop ({mutable:true}) body: string = "My Content"
  render() {
    return (
      <div class="card">
        <div class="card-header">
          <h1>{this.header}</h1>
        </div>
        <p>{this.body}</p>
      </div>
    );
  }
}
