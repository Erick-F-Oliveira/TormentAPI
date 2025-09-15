// Arquivo de personalização de cores e fontes para o Material-UI
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    // Cores personalizadas
    discord: {
      main: '#738ADB',    // Cor primária principal (para botões, links, etc.)
      light: '#7289da',   // Uma versão mais clara
      dark: '#4c5b9a',    // Uma versão mais escura
      contrastText: '#fff', // Cor do texto sobre a cor primária
    },
    tormenta: {
      main: '#c00000',
      light: '#d55758',
      dark: '#bf0101',
      contrastText: '#fff',
    },

  },

});

export default customTheme;