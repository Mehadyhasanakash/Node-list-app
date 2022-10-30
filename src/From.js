import React from 'react';

const From = () => {
    return (
       <div className="container mt-5">
           <div className="row justify-content-center">
               <div className="col-md-10">
               <form style={{border:"2px solid #ced4da", borderRadius:"10px", padding:"30px"}}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input type="Title" className="form-control" id="title" placeholder='Enter your Title' />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <textarea className='form-control' name="description" id="description"  rows="3" placeholder='Enter your Description'></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Add Note</button>
            </form>
               </div>
           </div>
       </div>
    );
};

export default From;