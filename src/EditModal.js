import React from 'react';

const EditModal = ({editData, datas, setDatas}) => {

  const updateHendel = () =>{
    datas.map((data)=>{
      console.log(data);
    })
  }
  
  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Edit Title</label>
                    <input type="Title" className="form-control" id="edittitle" placeholder='Enter your Title' />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Edit Description</label>
                    <textarea className='form-control' name="description" id="editdescription"  rows="3" placeholder='Enter your Description'></textarea>
                </div>
                
                
            </form>
            </div>
            <div className="modal-footer">
              <button onCanPlay={updateHendel} type="button" className="btn btn-primary" data-bs-dismiss="modal">Edit Note</button>
              
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EditModal;