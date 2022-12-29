import {Box, Container, HStack} from '@chakra-ui/react'
import {BsArrowRepeat} from 'react-icons/bs'
import {FaPlay, FaStepBackward, FaStepForward, FaVolumeUp} from 'react-icons/fa'
import {RiPlayListFill} from 'react-icons/ri'
import {Disc} from './disc'
import {PlayerControls} from './player-controls'
import {PlayerProgress} from './player-progress'
import {SongInfo} from './song-info'

export const Player = () => {
  return (
    <Box
      width="full"
      bg="gray.dark"
      height={{base: 24, '2xl': 32}}
      flexShrink={0}>
      <Container centerContent height="full" maxW="7xl">
        <HStack
          width="full"
          height="full"
          justifyContent="flex-start"
          spacing={12}>
          {/* Disc */}
          <Disc />
          {/* Song Info */}
          <SongInfo />
          {/* Player Controls */}
          <PlayerControls
            controls={[
              {label: 'Previous song', icon: <FaStepBackward />},
              {label: 'Play song', icon: <FaPlay />},
              {label: 'Next song', icon: <FaStepForward />},
            ]}
          />
          {/* Player Controls */}
          <PlayerProgress />
          {/* Player Progress */}
          <PlayerControls
            controls={[
              {label: 'Control volume', icon: <FaVolumeUp />},
              {label: 'Enable repeat', icon: <BsArrowRepeat />},
              {label: 'Playlist', icon: <RiPlayListFill />},
            ]}
          />
        </HStack>
      </Container>
    </Box>
  )
}
