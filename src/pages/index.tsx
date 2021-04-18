import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <VStack w="100%" maxW="1120px" mx="auto" paddingTop="36" spacing="8">
        <Flex as="header" w="100%" alignItems="center">
          <Text as="h1" fontSize="4xl" fontWeight="bold" color="white">
            Olá, Gabriel
          </Text>
          <Text ml="4.8rem" lineHeight="2.6rem" color="gray.50">
            Seja bem vindo de volta. <br /> Que tal continuar assistindo sua
            aula de onde parou?
          </Text>
          <Text ml="auto" color="gray.600">
            #NeverStopLearning
          </Text>
        </Flex>
        <Box w="100%">
          <Text>Teste</Text>
        </Box>
      </VStack>
    </Flex>
  );
}
