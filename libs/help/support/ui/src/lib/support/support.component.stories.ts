import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SupportComponent } from './support.component';

export default {
  title: 'SupportComponent',
  component: SupportComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SupportComponent>;

const Template: Story<SupportComponent> = (args: SupportComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}