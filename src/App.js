import React from "react";
import Header from "./travelJourney/components/Header";
import Travels from "./travelJourney/components/Travels";

import travels from "./travelJourney/travelsData.json";

function App() {
  return (
    <div className='App'>
      <Header />
      <Travels data={travels} />
    </div>
  );
}

export default App;
