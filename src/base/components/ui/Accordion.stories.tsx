import { Accordion } from './Accordion';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'Base/Accordion',
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: '만료',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie elit at justo dignissim dapibus. Ut sit amet metus non tellus tincidunt varius. Duis mi purus, ultrices non fringilla ut, interdum non risus. Maecenas porta magna ante, eu luctus augue feugiat vel. Nulla at rhoncus ligula. Morbi iaculis mattis lectus ut eleifend. Nulla consequat sapien a suscipit ultricies. Cras facilisis quam eu dolor egestas consectetur. Ut ut leo varius, blandit purus at, iaculis eros. Aliquam dictum turpis eu ipsum tempus mattis. Duis nec condimentum magna. Fusce nisl elit, tempor eget hendrerit vel, commodo eget tellus. Proin tincidunt convallis viverra.',
  },
};
