'use client';

import { ReactNode } from 'react';
import createCache from '@emotion/cache';
import { ThemeProvider as ThemeMUI, StyledEngineProvider } from '@mui/material';
import { CacheProvider, ThemeProvider as ThemeEmotion } from '@emotion/react';
import { theme, themeMUI } from '@/configs/styles/theme';

interface IThemeProvider {
  children: ReactNode;
}

const cache = createCache({
  key: 'css',
  prepend: true,
});

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <ThemeMUI theme={themeMUI}>
          <ThemeEmotion theme={theme}>{children}</ThemeEmotion>
        </ThemeMUI>
      </CacheProvider>
    </StyledEngineProvider>
  );
};
