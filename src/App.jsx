import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold my-8 text-purple-600">Vite + React</h1>
      <h1 className="text-4xl font-bold text-primary">Hello, World</h1>
      <h1 className="text-4xl font-bold text-accent">Hello, World</h1>
      <input
        type="checkbox"
        checked="checked"
        className="checkbox checkbox-accent checkbox-lg"
      />
      <input
        type="checkbox"
        checked="checked"
        className="checkbox checkbox-primary checkbox-lg"
      />
    </div>
  );
};

export default App;
