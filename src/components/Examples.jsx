import React from "react";
import ExampleButton from "./ExampleButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [topic, setTopic] = React.useState();

  function handleSelect(selectedBtn) {
    setTopic(selectedBtn);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
          buttons={<>
              <ExampleButton
                isStyled={topic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </ExampleButton>
              <ExampleButton
                isStyled={topic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </ExampleButton>
              <ExampleButton
                isStyled={topic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </ExampleButton>
              <ExampleButton
                isStyled={topic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </ExampleButton>
            </>
          } >
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
      </Tabs>
    </Section>
  );
}
