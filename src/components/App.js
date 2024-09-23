import React, { useState } from 'react';

// Tabs component that accepts 'tabs' as a prop
function Tabs({ tabs }) {
  // State to track the active tab index
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index); // Update active tab when clicked
  };

  return (
    <div>
      {/* Render the tab titles */}
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => handleTabClick(index)}>
            {tab.title}
          </li>
        ))}
      </ul>

      {/* Render the content of the active tab */}
      <div style={{ marginTop: '20px' }}>
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}

// Example usage of the Tabs component
export default function App() {
  const tabsData = [
    { title: 'Tab 1', content: 'This is the content for Tab 1' },
    { title: 'Tab 2', content: 'This is the content for Tab 2' },
    { title: 'Tab 3', content: 'This is the content for Tab 3' },
  ];

  return <Tabs tabs={tabsData} />;
}
