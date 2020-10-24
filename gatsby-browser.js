import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from "./src/themes/theme";

export const wrapRootRlement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        {element}
    </ThemeProvider>
)