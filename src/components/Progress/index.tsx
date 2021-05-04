import { Flex, FlexProps } from "@chakra-ui/layout";
import { Flame } from "./Flame";

interface ProgressBarProps extends FlexProps {
  progress: number;
}

export function ProgressBar({ progress, ...rest }: ProgressBarProps) {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      {...rest}
      h="12px"
      alignItems="center"
    >
      <Flex zIndex="0" backgroundColor="gray.300" w="100%" h="6px">
        <Flex
          backgroundColor="whatsapp.500"
          w={`${progress}%`}
          zIndex="1"
        ></Flex>
        <Flame />
      </Flex>
    </Flex>
  );
}
