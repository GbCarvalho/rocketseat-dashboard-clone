import { Image } from "@chakra-ui/image";
import { Flex, FlexProps } from "@chakra-ui/layout";

interface FlameProps extends FlexProps {}

export function Flame({ ...rest }: FlameProps) {
  // The mt and mx may be an temporary solution
  return (
    <Flex
      backgroundColor="whatsapp.500"
      p="1"
      borderRadius="100"
      w="24px"
      h="24px"
      alignItems="center"
      justifyContent="center"
      mx="-0.5"
      mt="-9px"
      {...rest}
    >
      <Image src="/images/flame.svg" />
    </Flex>
  );
}
