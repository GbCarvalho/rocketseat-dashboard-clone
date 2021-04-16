import { RadioButtonGroup } from "@chakra-ui/core";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#EEEEF2",
      "100": "#d1d2dc",
      "200": "#b3b5c6",
      "300": "#9699b0",
      "400": "#797d9a",
      "500": "#616480",
      "600": "#797D9A",
      "700": "#202024",
      "800": "#1F2029",
      "900": "rgb(18, 18, 20)",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
