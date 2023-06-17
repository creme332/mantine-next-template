import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

import { Container } from "@mantine/core";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          {" "}
          <Head>
            <meta charset="utf-8" />
            <link
              rel="icon"
              href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😀</text></svg>"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="Welcome to our exciting hide-and-seek web game! Challenge yourself to find the hidden character in each scene, and see how fast you can do it. With randomized characters and difficulty levels, each game is a unique experience. Try it now and put your search skills to the test!"
            />
            <title>qkwiqq</title>
          </Head>
          <Header></Header>{" "}
          <Container>
            <Component {...pageProps} />
          </Container>
          <Footer></Footer>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
