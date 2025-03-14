import React from 'react'
import {FlatList, FlatListProps} from 'react-native'
import {
  ExternalKeyboardAvoidingContainerProps,
  KeyboardAvoidingContainer,
  useKeyboardAvoidingContainerProps,
} from './KeyboardAvoidingContainer'
import {generic} from './utils/react'

export interface KeyboardAvoidingFlatListProps<TItem>
  extends FlatListProps<TItem>,
    ExternalKeyboardAvoidingContainerProps {}

export const KeyboardAvoidingFlatList = generic(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <TItem extends unknown>(props: KeyboardAvoidingFlatListProps<TItem>) => {
    const KeyboardAvoidingContainerProps = useKeyboardAvoidingContainerProps(
      props,
    )

    return (
      <KeyboardAvoidingContainer
        {...KeyboardAvoidingContainerProps}
        ScrollViewComponent={FlatList}
      />
    )
  },
)
