import { Box, BoxProps, Text } from '@saintmary/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing element</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {},
}
