import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, HStack } from "@chakra-ui/layout";

export function Profile() {
  return (
    <HStack spacing="4">
      <Button bg="gray.700" _hover={{ bg: "gray.900" }} w="52px" h="52px">
        <Image src="/images/search.svg" h="6" w="6" />
      </Button>
      <Button bg="gray.700" _hover={{ bg: "gray.900" }} w="52px" h="52px">
        <Image src="/images/user-add.svg" h="22px" w="26px" />
      </Button>
      <Button bg="gray.700" _hover={{ bg: "gray.900" }} w="52px" h="52px">
        <Image src="/images/bell.svg" h="6" w="6" color="gray.600" />
      </Button>
      <Flex
        border="2px"
        borderRadius="50"
        h="54px"
        w="54px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="https://github.com/GbCarvalho.png"
          h="46px"
          w="46px"
          borderRadius="28"
        />
      </Flex>
    </HStack>
  );
}
