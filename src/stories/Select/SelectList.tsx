import React, { useCallback, useEffect, useRef } from 'react'
import { list } from './Select.styles'

type SelectListProps = {
  children: React.ReactNode
  position: {
    top?: string
    right?: string
    bottom?: string
    left?: string
  }
  close: () => void
}
const SelectList = ({ children, position, close }: SelectListProps) => {
  const { top, right, bottom, left } = position

  const selectListRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (!selectListRef.current?.contains(target)) close()
    },
    [selectListRef, close]
  )

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div
      ref={selectListRef}
      css={[list, top && { top }, right && { right }, bottom && { bottom }, left && { left }]}
    >
      {children}
    </div>
  )
}

export default SelectList
