import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <Box
      as="header"
      bg="rgb(255 255 255 / 80%)"
      position="fixed"
      top="0"
      width="100%"
      zIndex="100"
      shadow="sm"
      display="flex"
      justifyContent="space-between"
    >
      <Link href="/">
        <Box
          as="a"
          p="4"
          d="inline-block"
          fontSize="20px"
          fontWeight="500"
          cursor="pointer"
        >
          Next meets Chakra
        </Box>
      </Link>

      <Box>
        <Link href="/reserve">
          <Box
            as="a"
            p="4"
            d="inline-block"
            fontSize="20px"
            fontWeight="500"
            cursor="pointer"
          >
            Reserve
          </Box>
        </Link>
        <Link href="/about">
          <Box
            as="a"
            p="4"
            d="inline-block"
            fontSize="20px"
            fontWeight="500"
            cursor="pointer"
          >
            About
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
