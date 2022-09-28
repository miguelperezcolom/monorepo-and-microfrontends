import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HelpComponent } from './help.component';

export default {
  title: 'HelpComponent',
  component: HelpComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<HelpComponent>;

const Template: Story<HelpComponent> = (args: HelpComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
