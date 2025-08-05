import React from "react";
import ExampleButton from './ExampleButton';
import { EXAMPLES } from "../data";

export default function Examples() {
  const [topic, setTopic] = React.useState();

  function handleSelect(selectedBtn) {
    setTopic(selectedBtn);
  }
  return (
    <section id="examples">
      <menu>
        <ExampleButton
          isStyled={topic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </ExampleButton>
        <ExampleButton
          isStyled={topic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </ExampleButton>
        <ExampleButton
          isStyled={topic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </ExampleButton>
        <ExampleButton
          isStyled={topic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </ExampleButton>
      </menu>
      {topic ? (
        <div id="tab-content">
          <h3>{EXAMPLES[topic].title}</h3>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>{EXAMPLES[topic].code}</code>
          </pre>
        </div>
      ) : (
        <p>Choose any topic</p>
      )}
    </section>
  );
}
