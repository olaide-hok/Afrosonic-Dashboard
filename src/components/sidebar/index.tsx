import {List, ListItem, VStack} from '@chakra-ui/react'

export const Sidebar = () => {
  return (
    <VStack
      alignItems="flex-start"
      width="full"
      height="full"
      maxW={{base: 56, '2xl': 72}}
      borderRightColor="gray.dark"
      borderRightWidth={2}
      flexShrink={0}>
      {/* Logo */}
      <List width="full" overflowY="auto"></List>
    </VStack>
  )
}
