import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((i) => (
          <CoreConcept key={i.title} {...i} />
        ))}
      </ul>
    </Section>
  );
}
