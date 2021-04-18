import Icon from "@chakra-ui/icon";
import { HStack, Link } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { HiChevronDown } from "react-icons/hi";

export function NavBar() {
  return (
    <HStack spacing="6" color="gray.600">
      <Link _hover={{ color: "gray.50" }}>Home</Link>
      <Link _hover={{ color: "gray.50" }}>Perfil</Link>
      <Link _hover={{ color: "gray.50" }}>Discover</Link>
      <Menu placement="bottom" autoSelect={false}>
        <MenuButton as="button" _hover={{ color: "gray.50" }}>
          Ignite
          <Icon as={HiChevronDown} />
        </MenuButton>
        <MenuList bg="gray.700" border="1px">
          <MenuItem _hover={{ color: "gray.50", bg: "gray.600" }}>
            Higher
          </MenuItem>
          <MenuItem _hover={{ color: "gray.50", bg: "gray.600" }}>
            React JS
          </MenuItem>
          <MenuItem _hover={{ color: "gray.50", bg: "gray.600" }}>
            Node JS
          </MenuItem>
        </MenuList>
      </Menu>
      <Link _hover={{ color: "gray.50" }}>Experts Club</Link>
    </HStack>
  );
}
