// Tabs.js
import React, { useState } from 'react';

export default function Tabs({ tabs }) {
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
