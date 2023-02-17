import { useState } from "react";

import { ThemeProvider } from "styled-components";

import BaseContainer from "./pages/BaseContainer";
import GlobalStyle from "./styles/createGlobalStyle";
import { ThemeEnum, themeType } from "./styles/themes";

const App = () => {
  const [theme] = useState(ThemeEnum.light);

  return (
    <ThemeProvider theme={themeType[theme]}>
      <GlobalStyle />
      <BaseContainer />
    </ThemeProvider>
  );
};

export default App;
