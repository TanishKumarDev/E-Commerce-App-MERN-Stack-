// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#e3f9f5",
      100: "#c1ece1",
      200: "#9ddfcd",
      300: "#79d2b9",
      400: "#55c5a5",
      500: "#3cab8b", // main
      600: "#2e856c",
      700: "#20604d",
      800: "#123b2e",
      900: "#03160f",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50", // light background
        color: "gray.800",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },
  },
});

export default customTheme;
