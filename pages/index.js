import {
  Badge,
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useToast,
} from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import Head from 'next/head';
import { AvatarComponent } from '../components/avatar/avatar';

const HomePage = () => {
  const toast = useToast();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Box as="section" p="4" marginX="4" mb="4">
        <Heading as="h3" size="4xl" mb="2" isTruncated>
          Chakra UI
        </Heading>

        <Text fontSize="md" mb="2">
          ...というUI Frameworkを使ってみての感想。..😘
        </Text>

        <Badge bg="teal.600" color="white" mr="2">
          UID
        </Badge>
        <Badge bg="orange.600" color="white" mr="2">
          UXD
        </Badge>
        <Badge bg="blue.600" color="white" mr="2">
          React
        </Badge>
        <Badge bg="red.600" color="white" mr="2">
          Web Development
        </Badge>

        {/* <Button size="sm" bg="blue.500" color="white"></Button> */}
      </Box>

      <Box as="section" p="4" mb="4">
        <Heading as="h3" fontSize="24px" mb="4">
          What is so special??
        </Heading>

        <List spacing={3} mb="4">
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            UI及びUXデザインの学習経験
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Material Designの理解及びReactライブラリとの実装経験
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Firebaseを使ったシンプルなチャットアプリケーション及びそのテスト
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color="green.500" />
            FigmaやFramerを使ったプロトタイピング及びアニメーション表現
          </ListItem>
        </List>

        <Button
          size="sm"
          variant="outline"
          colorScheme="teal"
          onClick={() =>
            toast({
              title: 'Reserved successfully.',
              description: '一度お話ししたいと思った方はぜひご連絡を！！',
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
          }
        >
          予約する
        </Button>
      </Box>

      <Box as="section" marginX="4">
        <AvatarComponent />
      </Box>
    </div>
  );
};

export default HomePage;
