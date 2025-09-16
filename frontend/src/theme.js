// Arquivo de personalização de cores e fontes para o Material-UI
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    // Cores personalizadas
    discord: {
      main: "#738ADB",
      light: "#7289da",
      dark: "#4c5b9a",
      contrastText: "#fff",
    },
    tormenta: {
      main: "#c00000",
      light: "#d55758",
      dark: "#bf0101",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#b6090e", // usa cor do Discord
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Helvetica Neue',
          fontSize: "0.9rem",
          color: "#c00000", // cor normal
          "&.Mui-selected": {
            color: "#ed4245", // cor quando selecionado
          },
        },
      },
    },
  },
});

export default customTheme;
