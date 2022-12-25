import {
  HStack,
  VStack,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import {Image} from '../image/image'
import {genres} from './genres-data'

export const GenresCarousel = () => {
  const imageSize = parseInt(
    useBreakpointValue({base: '80px', md: '96px', '2xl': '192px'}, '2xl') ??
      '192px'
  )
  return (
    <HStack
      width="full"
      spacing={12}
      overflowX="auto"
      rounded="lg"
      flexShrink={0}>
      {/* map genres */}
      {genres.map(({name, image}, index) => (
        <LinkBox as="article" pb={3} role="group" key={`${index}-${name}`}>
          <VStack spacing={4}>
            <Box
              rounded="lg"
              overflow="hidden"
              width={imageSize}
              height={imageSize}>
              <LinkOverlay href="#">
                {/* Image */}
                <Image
                  transition="ease-out"
                  transitionProperty="all"
                  transitionDuration="normal"
                  _groupHover={{
                    transform: 'scale(1.1, 1.1)',
                  }}
                  src={image}
                  alt={name}
                  height={imageSize}
                  width={imageSize}
                  objectFit="cover"
                  quality="100"
                />
              </LinkOverlay>
            </Box>
            <Text fontWeight="medium">{name}</Text>
          </VStack>
        </LinkBox>
      ))}
    </HStack>
  )
}
