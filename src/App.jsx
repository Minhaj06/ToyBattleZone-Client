import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userPreferredTheme = localStorage.getItem("theme");

    if (userPreferredTheme) {
      setTheme(userPreferredTheme);
    } else {
      if (prefersDarkScheme) {
        setTheme("night");
      } else {
        setTheme("cupcake");
      }
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "cupcake" ? "night" : "cupcake";
    setTheme(newTheme);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold my-8 text-purple-600">Vite + React</h1>
      <h1 className="text-4xl font-bold text-primary">Hello, World</h1>
      <h1 className="text-4xl font-bold text-accent">Hello, World</h1>
      <input
        type="checkbox"
        defaultChecked={true}
        className="checkbox checkbox-accent checkbox-lg"
      />
      <input
        type="checkbox"
        defaultChecked={true}
        className="checkbox checkbox-primary checkbox-lg"
      />
      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
