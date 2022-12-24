import {VStack, HStack} from '@chakra-ui/react'

const Content = () => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      {/* Sidebar */}
      <VStack
        px={12}
        pt={12}
        width="full"
        height="full"
        spacing={6}
        overflow="hidden">
        {/* Search Bar */}
        {/* Genres Carousel */}
        <HStack width="full" alignItems="flex-start" overflow="hidden" flex={1}>
          {/* Top Picks */}
          {/* Top Producers */}
        </HStack>
      </VStack>
    </HStack>
  )
}

export default Content
