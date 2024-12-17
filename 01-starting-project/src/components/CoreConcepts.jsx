import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept.jsx';

export default function() {
    return (
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem}/>)}
        </ul>
      </section>
    )
}