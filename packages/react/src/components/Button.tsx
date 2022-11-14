import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green500',
        '&:hover:enabled': {
          backgroundColor: '$green300',
          transition: 'all 0.2s',
        },
        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$green300',
        border: '2px solid $green500',
        '&:hover:enabled': {
          backgroundColor: '$green500',
          color: '$white',
          transition: 'all 0.2s',
        },
        '&:disabled': {
          color: '$gray200',
          border: '2px solid $gray200',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:hover:enabled': {
          color: '$white',
          transition: 'all 0.2s',
        },
        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        padding: '0 $4',
        height: 34,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
