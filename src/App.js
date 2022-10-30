import React, { useState } from 'react';
import EditModal from './EditModal';
import From from './From';

const App = () => {
  const getDataFrom = () =>{
    const data = localStorage.getItem('datas')
    if(data) {
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
  const [editData, setEditData] = useState('');
  const [datas, setDatas] = useState(getDataFrom);
  return (
    <>
    <EditModal editData={editData} setEditData={setEditData} datas={datas} setDatas={setDatas}/>
      <From getDataFrom={getDataFrom} datas={datas} setDatas={setDatas} editData={editData} setEditData={setEditData}/>
      
    </>
  );
};

export default App;