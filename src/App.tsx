import { useState } from "react";

import "./App.css";

export const App = () => {
  const [val, setVal] = useState("");

  return (
    <form>
      <label>
        <input
          type="radio"
          name="group"
          value="a"
          onChange={(e) => setVal(e.target.value)}
        />
        A
      </label>
      <fieldset disabled>
        <label>
          <input
            type="radio"
            name="group"
            value="b"
            onChange={(e) => setVal(e.target.value)}
          />
          B
        </label>
      </fieldset>
      <label>
        <input
          type="radio"
          name="solo"
          onChange={(e) => setVal(e.target.value)}
        />
        Solo
      </label>
      <label>
        <input
          type="radio"
          value="nameless1"
          onChange={(e) => setVal(e.target.value)}
        />
        nameless1
      </label>
      <label>
        <input
          type="radio"
          name=""
          value="nameless2"
          onChange={(e) => setVal(e.target.value)}
        />
        nameless2
      </label>
      <label>
        <input
          type="radio"
          name="group"
          value="c"
          disabled
          onChange={(e) => setVal(e.target.value)}
        />
        C
      </label>
      <label>
        <input
          type="radio"
          name="group"
          value="d"
          onChange={(e) => setVal(e.target.value)}
        />
        D
      </label>
      <label>
        <input
          type="radio"
          name="group"
          value="e"
          onChange={(e) => setVal(e.target.value)}
        />
        E
      </label>
      <label>
        <input
          type="radio"
          name="foo"
          onChange={(e) => setVal(e.target.value)}
        />
        Foo
      </label>
      <label>
        <input
          type="text"
          name="group"
          onChange={(e) => setVal(e.target.value)}
        />
        Text
      </label>
      <pre>
        <output>{val}</output>
      </pre>
    </form>
  );
};
