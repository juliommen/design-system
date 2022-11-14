import { Heading, HeadingProps } from '@saintmary/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Example of Heading',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Example of H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default behavior is that the heading element should be an `h2` element, but one can change this behavior passing to the element the props `as`',
      },
    },
  },
}
