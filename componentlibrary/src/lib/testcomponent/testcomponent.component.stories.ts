import type { Meta, StoryObj } from '@storybook/angular';
import { TestcomponentComponent } from './testcomponent.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TestcomponentComponent> = {
  component: TestcomponentComponent,
  title: 'TestcomponentComponent',
};
export default meta;
type Story = StoryObj<TestcomponentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/testcomponent works!/gi)).toBeTruthy();
  },
};
