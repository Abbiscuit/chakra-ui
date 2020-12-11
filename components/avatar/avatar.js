import { Avatar, Box, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.custom(Box);
const MotionItem = motion.custom(WrapItem);

export const AvatarComponent = () => {
  return (
    <MotionBox
      initial={{
        opacity: 0,
        translateY: 10,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.65,
        ease: 'easeOut',
      }}
    >
      <Text as="p" fontSize="16px" lineHeight="20px" fontWeight="400" mb={2}>
        参加者の皆さま
      </Text>

      <Wrap>
        <MotionItem
          whileHover={{ scale: 1.1, opacity: 0.85 }}
          whileTap={{ scale: 0.85 }}
        >
          <Avatar name="Dan Abrahamov" src="https://bit.ly/dan-abramov" />
        </MotionItem>
        <MotionItem
          whileHover={{ scale: 1.1, opacity: 0.85 }}
          whileTap={{ scale: 0.85 }}
        >
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
        </MotionItem>
        <MotionItem
          whileHover={{ scale: 1.1, opacity: 0.85 }}
          whileTap={{ scale: 0.85 }}
        >
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        </MotionItem>
        <MotionItem
          whileHover={{ scale: 1.1, opacity: 0.85 }}
          whileTap={{ scale: 0.85 }}
        >
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        </MotionItem>
        <MotionItem
          whileHover={{ scale: 1.1, opacity: 0.85 }}
          whileTap={{ scale: 0.85 }}
        >
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        </MotionItem>
        <MotionItem
          whileHover={{ scale: 1.1, opacity: 0.85 }}
          whileTap={{ scale: 0.85 }}
        >
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </MotionItem>
        <MotionItem
          whileHover={{ scale: 1.1, opacity: 0.85 }}
          whileTap={{ scale: 0.85 }}
        >
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </MotionItem>
      </Wrap>
    </MotionBox>
  );
};
