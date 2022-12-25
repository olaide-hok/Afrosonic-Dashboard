import {HStack, Text, Avatar as ChakraAvatar} from '@chakra-ui/react'

export const Avatar = () => {
  return (
    <HStack flexShrink={0}>
      <Text mr={3}>Habeeb Kareem</Text>
      <ChakraAvatar name="Habeeb Kareem" src="/images/dog-2.jpg" />
    </HStack>
  )
}
