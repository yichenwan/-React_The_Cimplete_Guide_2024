import { EXAMPLES } from '../data-with-examples';
import TabButton from './TabButton.jsx';
import { useState } from 'react';
import Section from './Section';

export default function () {
    const [ selectedTopic , setSelectedTopic ] = useState();
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }    
    return (
        <Section title="Example" id='examples'>
        <menu>
        <TabButton isSelected={selectedTopic=='components'} onClick={() => handleSelect('components')}>Componenets</TabButton>
        <TabButton isSelected={selectedTopic=='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic=='props'} onClick={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic=='state'} onClick={() => handleSelect('state')}>State</TabButton>
        </menu>
        {selectedTopic? 
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
        </pre>
        </div>: <p>Please click the button</p>}
        </Section>
    )
} 