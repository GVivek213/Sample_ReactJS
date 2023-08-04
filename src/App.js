import './App.css';
import Header from './WebTechTalkCodeEvolution/Tasks/Header';
import Main from './WebTechTalkCodeEvolution/Tasks/Main';
import { useState } from 'react';
import FormHandling from './WebTechTalkCodeEvolution/Practice/FormHandling'
import RoutingSample from './WebTechTalkCodeEvolution/Router/RoutingSample';
function App() {
  const [activeTab, setActiveTab] = useState("snacks")
  return (
    <div>
      {/* <Header setActiveTab={setActiveTab} />
      <Main activeTab={activeTab} /> */}
      {/* <FormHandling /> */}
      <RoutingSample />

    </div>
  );
}

export default App;
