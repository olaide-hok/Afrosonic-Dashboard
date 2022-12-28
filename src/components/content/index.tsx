import {VStack, HStack} from '@chakra-ui/react'
import {GenresCarousel} from 'components/genres-carousel'
import {SearchBar} from 'components/search-bar'
import {Sidebar} from 'components/sidebar'
import {TopPicks} from 'components/top-picks'
import {TopProducers} from 'components/top-producers'

const Content = () => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      {/* Sidebar */}
      <Sidebar />
      <VStack
        px={12}
        pt={12}
        width="full"
        height="full"
        spacing={6}
        overflow="hidden">
        {/* Search Bar */}
        <SearchBar />
        {/* Genres Carousel */}
        <GenresCarousel />
        <HStack width="full" alignItems="flex-start" overflow="hidden" flex={1}>
          {/* Top Picks */}
          <TopPicks flex={1} />
          {/* Top Producers */}
          <TopProducers flexShrink={0} />
        </HStack>
      </VStack>
    </HStack>
  )
}

export default Content
