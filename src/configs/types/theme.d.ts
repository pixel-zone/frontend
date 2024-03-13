// styled.d.ts
import { theme } from '@/configs/styles/theme';

type theme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends theme {}
}
