import {VStack} from '@chakra-ui/react'
import Content from 'components/content'
import {Player} from 'components/player'
const IndexPage = () => (
  <VStack height="100vh" bg="black" width="full" overflow="hidden" spacing={0}>
    {/* Content */}
    <Content />
    {/* Player */}
    <Player />
  </VStack>
)

export default IndexPage
