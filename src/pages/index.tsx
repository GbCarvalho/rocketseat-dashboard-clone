import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
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

        <Button
          w="100%"
          bgGradient="linear(to-r, gray.700, purple.700)"
          alignItems="center"
          p="3.2rem"
          borderRadius="5px"
          color="white"
          _hover={{ border: "2px", borderColor: "purple.500" }}
        >
          <Flex flex="column" flexDir="column" alignItems="flex-start">
            <Text fontSize="24" fontWeight="800">
              Encerramento do módulo
            </Text>
            <Text mt="2" fontSize="14" color="gray.50" fontWeight="400">
              ReactJS / Chapter IV
            </Text>
          </Flex>

          <Flex ml="auto" alignItems="center" bg="transparent">
            <Text as="span" fontWeight="700">
              CONTINUAR ASSISTINDO
            </Text>
            <Image src="/images/play.svg" ml="1.6rem"></Image>
          </Flex>
        </Button>

        <SimpleGrid
          display="flex"
          flex="1"
          gap="6"
          minChildWidth="320px"
          align="flex-start"
          flexDir="row"
        >
          <Box p={["6", "8"]} bg="gray.700" borderRadius={8} pb="4">
            <Flex>
              <Flex borderColor="gray.50" borderRadius="full" border="2px">
                <Image
                  src="https://github.com/gbcarvalho.png"
                  w="128px"
                  h="128px"
                  borderRadius="64"
                  border="2px"
                  borderColor="gray.700"
                />
              </Flex>

              <Flex display="flex" flexDir="column" ml="8">
                <Flex display="flex" flexDir="column">
                  <Text fontSize="xl" fontWeight="700" color="white">
                    Meu Perfil
                  </Text>
                  <Text>0 visualizações nos últimos 7 dias</Text>
                </Flex>

                <Button
                  mt="8"
                  colorScheme="purple"
                  pY="4"
                  pX="6"
                  maxW="48"
                  fontSize="md"
                  fontWeight="700"
                >
                  VISUALIZAR PERFIL
                </Button>
              </Flex>
            </Flex>

            <Divider my="8" />

            <Flex display="flex" flexDir="column">
              <Text display="flex" color="white">
                Nível do perfil:
                <Text fontWeight="700" color="whatsapp.500" ml="1">
                  Completo. Mandou bem
                </Text>
              </Text>

              <Progress
                mt="4"
                value={100}
                colorScheme="whatsapp"
                size="sm"
                max={100}
                w="485px"
              >
                asda
              </Progress>
            </Flex>
          </Box>

          <Box w="550px" h="320px" bg="gray.700" borderRadius={8}></Box>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
}
