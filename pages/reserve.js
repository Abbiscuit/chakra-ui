import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

const ReservePage = () => {
  return (
    <Box
      className="reserve-page"
      as="div"
      width="100%"
      maxW="648px"
      marginX="auto"
      marginY="0"
      minHeight="60vh"
      display="flex"
      alignItems="center"
      flexDir="column"
      justifyContent="center"
    >
      <Heading mb="8">Reservation</Heading>

      <form>
        <FormControl id="email">
          <FormLabel>Email Address:</FormLabel>
          <Input type="email" isRequired />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password:</FormLabel>
          <Input type="password" isRequired />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel as="legend">Choose one of our plans:</FormLabel>
          <RadioGroup defaultValue="monthly">
            <HStack spacing="24px">
              <Radio id="monthly" value="monthly">
                Monthly Plan $11/m
              </Radio>
              <Radio id="yearly" value="yearly">
                Yearly Plan $7/m
              </Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Yearly plan is 30% cheaper!!</FormHelperText>
        </FormControl>

        <FormControl>
          <Button type="submit" bg="blue.600" color="white">
            Reserve
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default ReservePage;
