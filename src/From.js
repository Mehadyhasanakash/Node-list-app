import React, { useEffect, useState } from 'react';
import Notes from './Notes';


const From = () => {
    const getDataFrom = () =>{
        const data = localStorage.getItem('datas')
        if(data) {
          return JSON.parse(data);
        }
        else{
          return []
        }
      }
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [datas, setDatas] = useState(getDataFrom);


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
          console.log(data)
    }




    return (
       <div className="container mt-5">
           <div className="row justify-content-center">
               <div className="col-md-10">
               <form onSubmit={handelAddItem} style={{border:"2px solid #ced4da", borderRadius:"10px", padding:"30px"}}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="Title" className="form-control" id="title" placeholder='Enter your Title' />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='form-control' name="description" id="description"  rows="3" placeholder='Enter your Description'></textarea>
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
                      <Notes data={data} key={data.id}/>
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