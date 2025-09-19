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
          backgroundColor: "#00ff00", // cor da barra de indcação no menu lateral (se não definir ele )
        },
      },
    },

    MuiTab: {
      variants: [
        {
          props: { variantType: "discord" },
          style: {
            color: "#4c5b9a",
            "&.Mui-selected": {
              color: "#738ADB",
            },
            fontFamily: '"Roboto", sans-serif',

          },

        },
        {
          props: { variantType: "tormenta" },
          style: {
            color: "#bf0101",
            "&.Mui-selected": {
              color: "#c00000",
            },
            fontFamily: '"Arial", sans-serif',
          },
        },
      ],
    },
  },
});

export default customTheme;
