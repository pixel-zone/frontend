import { injectGlobal } from '@emotion/css';
import { Orbitron } from 'next/font/google';

export const orbitron = Orbitron({ subsets: ['latin'] });

export const GlobalStyles = injectGlobal`
  
  html, body {
    font-family: ${orbitron.style['fontFamily']};
  }

  /* Handle */
  ::scrollbar-thumb {
    background: rgba(85, 85, 85, 0.8)
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(85, 85, 85, 0.8)
  }

  ::-webkit-scrollbar-thumb:horizontal{
    display: none;
  }

  /* Handle on hover */
  ::scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.5);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.5);
  }  

  .Toastify__toast-container {
    z-index: 1000000;
  }
`;
