import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckBoxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckBoxContainer>
  )
}
