import { Image } from "@chakra-ui/image";
import { Flex, FlexProps } from "@chakra-ui/layout";

interface ProgressBarProps extends FlexProps {
  progress: number;
}

export function ProgressBar({ progress, ...rest }: ProgressBarProps) {
  return (
    <Flex
      backgroundColor="gray.600"
      w="100%"
      justifyContent="space-between"
      {...rest}
      h="6px"
    >
      <Flex zIndex="1" backgroundColor="whatsapp.500" w={`${progress}%`}></Flex>
      <Image src="/images/flame.svg" position="relative" right="0" />
    </Flex>
  );
}
