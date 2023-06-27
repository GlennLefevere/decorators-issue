import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

function CustomDecorator(): MethodDecorator {
  return (target, propertyKey, descriptor)  => {
    console.log(target, propertyKey, descriptor);
  }
}
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

  @CustomDecorator()
  dummyFunction() {
    console.log('this is just a dummy');
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
