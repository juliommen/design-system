import { Text, TextProps } from '@saintmary/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus voluptates cum repellendus expedita nulla quisquam obcaecati deserunt veritatis delectus voluptatibus eligendi temporibus dolor aliquam harum eos, eveniet, debitis aliquid.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
