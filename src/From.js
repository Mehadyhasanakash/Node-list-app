import React, { useEffect, useState } from 'react';
import Notes from './Notes';


const From = ({editData, setEditData, datas, setDatas  }) => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    


    useEffect( () =>{
        localStorage.setItem('datas', JSON.stringify(datas));

    }, [datas])

   

    const handelAddItem= (e) =>{
        e.preventDefault();
        let  data ={
            title:title,
            description:description,
            id: new Date().getTime()
            
      
          }
          setDatas([...datas, data]);
          setTitle('');
          setDescription('');
          
    }




    return (
       <div className="container mt-5">
           <div className="row justify-content-center">
               <div className="col-md-10">
               <form onSubmit={handelAddItem} style={{border:"2px solid #ced4da", borderRadius:"10px", padding:"30px"}}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="Title" className="form-control" id="title" placeholder='Enter your Title' required />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='form-control' name="description" id="description"  rows="3" placeholder='Enter your Description' required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Add Note</button>
            </form>
            
               </div>
           </div>

           <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-5">
            {
                datas.length === 0 ?       <div className="card mb-3">

                <div className="card-body">
                  <h5 className="card-title">Tital: No data</h5>
                  <p className="card-text">Description: No Massage</p>
                  
                </div>
              </div> : datas.map((data)=>{
                  return(
                      <Notes editData= {editData} setEditData={setEditData} data={data} datas= {datas} setDatas={setDatas} key={data.id}/>
                  )
              })
            }
          </div>
        </div>
      </div>
       </div>
       
    );
};

export default From;