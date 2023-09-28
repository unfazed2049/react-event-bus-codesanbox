import React, { useState } from "react";

import { EventBus } from "./event-bus";
import "./styles.css";

const emitter = new EventBus();

function CompEmit() {
  function handleClick() {
    emitter.emit("add", 1);
  }

  return <button onClick={handleClick}>emit event!</button>;
}

function CompOn1() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    function handleAdd() {
      setState((state) => state + 1);
    }

    emitter.on("add", handleAdd);
  }, []);

  return <p>state + 1: {state}</p>;
}

function CompOn2() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    function handleAdd() {
      setState((state) => state + 2);
    }

    emitter.on("add", handleAdd);
  }, []);

  return <p>state + 2: {state}</p>;
}

function CompOnce() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    function handleAdd() {
      setState((state) => state + 3);
    }

    emitter.once("add", handleAdd);
  }, []);

  return <p>once: {state}</p>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <CompEmit />
      <CompOn1 />
      <CompOn2 />
      <CompOnce />
    </div>
  );
}
