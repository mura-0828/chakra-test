import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

// テーマの設定
const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "rgba(0,0,0,.6)",
      },
      ".chakra-modal__content-container:has(#chakra-modal-SearchDateTimeModal)":
        {
          padding: "16px",
        },
      ".chakra-modal__content-container:has(#chakra-modal-ScheduleModal)": {
        padding: "16px",
      },
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    },
  },
  colors: {
    text: {
      base: "rgba(0,0,0,.6)",
    },
    border: "rgba(0,0,0,.1)",
    "bg-gray": "#F7F7F7",
    primary: {
      100: "#EA545D",
      200: "#EA545D",
      300: "#EA545D",
      400: "#EA545D",
      500: "#EA545D",
      600: "#EA545D",
      700: "#BE454D",
      800: "#BE454D",
      900: "#BE454D",
    },
    secondary: {
      100: "#179D950C", // 12%
      200: "#179D95",
      300: "#179D95",
      400: "#179D95",
      500: "#179D95",
      600: "#179D95",
      700: "#0F6C66",
      800: "#0F6C66",
      900: "#0F6C66",
    },
    link: "#48B9FF",
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.25rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
