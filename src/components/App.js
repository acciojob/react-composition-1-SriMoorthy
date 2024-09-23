import React from 'react';
import Tabs from './Tabs'; // Import the Tabs component

function App() {
  // Define the tabsData array with titles and contents
  const tabsData = [
    { title: 'Tab 1', content: 'This is the content for Tab 1' },
    { title: 'Tab 2', content: 'This is the content for Tab 2' },
    { title: 'Tab 3', content: 'This is the content for Tab 3' },
  ];

  return (
    <div>
      {/* Pass tabsData to the Tabs component */}
      <Tabs tabs={tabsData} />
    </div>
  );
}

export default App;

