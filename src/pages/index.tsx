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
import theme from "@chakra-ui/theme";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Header } from "../components/Header";
import { ProgressBar } from "../components/Progress";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[300],
  },
  grid: {
    show: true,
    borderColor: theme.colors.gray[700],
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "category",
    axisBorder: {
      show: false,
      color: theme.colors.gray[600],
    },
    axisTicks: {
      show: false,
      color: theme.colors.gray[600],
    },
    categories: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  colors: [theme.colors.whatsapp[500]],
};
const series = [{ name: "Series 1", data: [31, 120, 10, 28, 51, 18, 109] }];

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        as="header"
        w="100%"
        alignItems="center"
        maxW="1120px"
        mx="auto"
        pt="36"
      >
        <Text as="h1" fontSize="4xl" fontWeight="bold" color="white">
          Olá, Gabriel
        </Text>
        <Text ml="3rem" lineHeight="1.7rem" color="gray.50">
          Seja bem vindo de volta. <br /> Que tal continuar assistindo sua aula
          de onde parou?
        </Text>
        <Text ml="auto" color="gray.600">
          #NeverStopLearning
        </Text>
      </Flex>

      <VStack w="100%" maxW="1120px" mx="auto" paddingTop="16" spacing="8">
        <Button
          w="100%"
          bgGradient="linear(to-r, gray.700, purple.700)"
          alignItems="center"
          py="3.6rem"
          px="2rem"
          borderRadius="5px"
          color="white"
          _hover={{ border: "2px", borderColor: "purple.500" }}
        >
          <Flex flex="column" flexDir="column" alignItems="flex-start">
            <Text fontSize="24" fontWeight="800">
              Expectativa x Realidade
            </Text>
            <Text mt="2" fontSize="14" color="gray.50" fontWeight="400">
              Higher
            </Text>
          </Flex>

          <Flex ml="auto" alignItems="center" bg="transparent">
            <Text as="span" fontWeight="700" fontSize="sm">
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
          <Box bg="gray.700" borderRadius={8} pb="4">
            <Flex px={["6", "8"]} paddingTop={["6", "8"]}>
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
                  <Text fontSize="2xl" fontWeight="700" color="white">
                    Meu perfil
                  </Text>
                  <Text>0 visualizações nos últimos 7 dias</Text>
                </Flex>

                <Button
                  mt="8"
                  colorScheme="purple"
                  pY="4"
                  pX="3"
                  maxW="48"
                  fontSize="sm"
                  fontWeight="700"
                >
                  VISUALIZAR PERFIL
                </Button>
              </Flex>
            </Flex>

            <Flex mt="8" backgroundColor="gray.900" w="100%" h="1px" />

            <Flex
              mt="8"
              px={["6", "8"]}
              paddingBottom={["6", "8"]}
              display="flex"
              flexDir="column"
            >
              <Text display="flex" color="white">
                Nível do perfil:
                <Text fontWeight="700" color="whatsapp.500" ml="1">
                  Completo. Mandou bem
                </Text>
              </Text>

              <ProgressBar mt="3" progress={100} w="485px"></ProgressBar>
            </Flex>
          </Box>

          <Box w="550px" h="320px" bg="gray.700" borderRadius={8}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              mt={["6", "8"]}
              px={["6", "8"]}
            >
              <Text fontWeight="700" fontSize="2xl" color="white">
                Minha atividade no fórum
              </Text>

              <Text>Discover</Text>
            </Flex>
            <Flex
              px={["6", "8"]}
              w="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Flex>
            <Flex px={["6", "8"]} w="100%" justifyContent="space-between">
              <Button flex="1" mx="3">
                Minhas interações
              </Button>
              <Button flex="1">Mais relevante</Button>
            </Flex>
          </Box>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
}
