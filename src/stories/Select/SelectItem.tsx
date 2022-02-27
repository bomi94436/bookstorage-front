import { Text } from '@stories'
import React from 'react'
import { item } from './Select.styles'

type SelectItemProps = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const SelectItem = ({ children, onClick }: SelectItemProps) => {
  return (
    <button onClick={onClick} css={item}>
      <Text>{children}</Text>
    </button>
  )
}

export default SelectItem
