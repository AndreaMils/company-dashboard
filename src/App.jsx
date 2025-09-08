import { ThemeProvider } from "./ThemeContext";
import Dashboard from "./components/Dashboard";

// Main App Component
function App() {
  return <Dashboard />;
}

// Wrapped App Component with Theme Provider
function AppWithTheme() {
  return (
    <ThemeProvider>
      <div>
        <App />
      </div>
    </ThemeProvider>
  );
}

export default AppWithTheme;
