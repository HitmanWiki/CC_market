import { keyframes } from '@stitches/react'
import { Box, Flex } from 'components/primitives'

const pulse = keyframes({
  '0%': { backgroundColor: '$yellow6' },
  '50%': { backgroundColor: '$yellow8' },
  '100%': { backgroundColor: '$yellow6' },
})

const LoadingCard = () => {
  return (
    <Flex
      direction="column"
      justify="end"
      css={{
        borderRadius: 8,
        overflow: 'hidden',
        background: '$yellow6',
        height: '100%',
        minHeight: 332,
        '@md': {
          minHeight: 372,
        },
      }}
    >
      <Flex
        css={{ background: '#f1c232', p: '$4', height: 132 }}
        direction="column"
      >
        <Flex
          css={{ mb: '$4', height: '100%' }}
          align="center"
          justify="between"
        >
          <Box
            css={{
              height: 20,
              width: 120,
              background: '$yellow6',
              animation: `${pulse} 2s ease-in infinite`,
            }}
          ></Box>
          <Box
            css={{
              height: 20,
              width: 40,
              background: '$yellow6',
              animation: `${pulse} 2s ease-in infinite`,
            }}
          ></Box>
        </Flex>
        <Flex
          css={{ mb: '$4', height: '100%' }}
          align="center"
          justify="between"
        >
          <Box
            css={{
              height: 20,
              width: 60,
              background: '$yellow6',
              animation: `${pulse} 2s ease-in infinite`,
            }}
          ></Box>
          <Box
            css={{
              height: 20,
              width: 20,
              background: '$yellow6',
              animation: `${pulse} 2s ease-in infinite`,
            }}
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default LoadingCard
