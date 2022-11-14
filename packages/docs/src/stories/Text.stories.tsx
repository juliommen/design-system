import { Text, TextProps } from '@saintmary/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus voluptates cum repellendus expedita nulla quisquam obcaecati deserunt veritatis delectus voluptatibus eligendi temporibus dolor aliquam harum eos, eveniet, debitis aliquid.Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Minima cupiditate neque hic itaque inventore at quos, mollitia laboriosam ratione deserunt explicabo. Quaerat eligendi debitis modi incidunt dolorum commodi delectus voluptatibus.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
