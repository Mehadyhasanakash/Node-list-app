import React from 'react';
import EditModal from './EditModal';
import From from './From';
import Notes from './Notes';

const App = () => {
  return (
    <>
    <EditModal/>
      <From/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-5">
            <Notes/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;