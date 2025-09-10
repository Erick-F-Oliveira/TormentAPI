import AppRoutes from "./router";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme"; 

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
