import React from "react";
import {
  ChakraProvider,
  Flex,
  Text,
  Badge,
  Spinner,
  Center,
} from "@chakra-ui/react";

const App = () => (
  <ChakraProvider resetCSS>
    <Center mt={20}>
      <Flex>
        <Text fontWeight="bold" fontSize="3xl">
          The Edges of Vertices
        </Text>
        <Badge variant="subtle" colorScheme="gray" mt={2} mb={6}>
          BETA
        </Badge>
      </Flex>
    </Center>
    <Center pt={100} pb={100}>
      <Spinner mr={2} />
      <Flex>
        <Text mr={2} textAlign="center">
          Release Version is still on the way. Stay tuned!
        </Text>
      </Flex>
    </Center>
    <Center>
      <Text mt={3} ml={4}>
        Developed by RXN Studios MMXXIV
      </Text>
    </Center>
  </ChakraProvider>
);

export default App;
