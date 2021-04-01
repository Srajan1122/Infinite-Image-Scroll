import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navigation.js';
import TextSection from './components/textSection.js';
import MainContent from './components/mainContent.js';

function App() {
  return (
    <div>
      <Navigation />
      <TextSection />
      <MainContent />
    </div>
  );
}

export default App;
