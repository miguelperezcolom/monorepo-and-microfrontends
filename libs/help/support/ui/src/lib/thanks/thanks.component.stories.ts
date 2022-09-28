import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ThanksComponent } from './thanks.component';

export default {
  title: 'ThanksComponent',
  component: ThanksComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ThanksComponent>;

const Template: Story<ThanksComponent> = (args: ThanksComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}