import React from 'react';

const Notes = ({data, datas, setDatas, setEditData}) => {

  const hendelDelet = (id) =>{
   const newData = datas.filter((data)=> {
     if(data.id !== id){
       return data;
     }
     
   })
   setDatas(newData)
   setEditData(id);

  }

const hendelEdit = (id) =>{
  console.log(id)
  datas.filter((data) =>{
    if(data.id === id){
      document.getElementById('Edit-title').value=data.title;
      document.getElementById('Edit-description').value=data.description;
    }
  })

}




  return (
    <>

      <div className="card mb-3">

        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <button onClick={() => hendelEdit(data.id)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>
          <button onClick={() => hendelDelet(data.id)} className="btn btn-danger mx-3">Delet</button>
        </div>
      </div>
    </>
  );
};

export default Notes;