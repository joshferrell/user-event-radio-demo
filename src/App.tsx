import { useState } from "react";

import "./App.css";

export const App = () => {
  const [val, setVal] = useState("");

  return (
    <form>
      <input id="A" type="radio" name="group" value="a" />
      <label htmlFor="A">A</label>
      <label>
        <input type="radio" name="group" value="d" />D
      </label>
      <label>
        <input type="radio" name="group" value="e" />E
      </label>
    </form>
  );
};
