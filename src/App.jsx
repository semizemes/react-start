import React from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import ExampleButton from "./components/ExampleButton";

function App() {
  const [topic, setTopic] = React.useState();


  function handleSelect(selectedBtn) {
    setTopic(selectedBtn);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map(i => <CoreConcept key={i.title} {...i} />)}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <ExampleButton
              isStyled={topic === 'components'}
              onSelect={() => handleSelect("components")}
            >
              Components
            </ExampleButton>
            <ExampleButton
              isStyled={topic === 'jsx'}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </ExampleButton>
            <ExampleButton
              isStyled={topic === 'props'}
              onSelect={() => handleSelect("props")}
            >
              Props
            </ExampleButton>
            <ExampleButton
              isStyled={topic === 'state'}
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
      </main>
    </div>
  );
}

export default App;
