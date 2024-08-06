import React, { useState } from 'react';
import Header from './components/header';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
    }
  };

  return (
    <div>
        <Header setActiveSection={setActiveSection} />
        {renderSection()}
      </div>
    );
  };

export default App
