import React from 'react';

const From = () => {
    return (
        <div>
            <form className='m-50 mx-auto'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input type="Title" className="form-control" id="title" />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <textarea className='form-control' name="description" id="description"  rows="3"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Add Note</button>
            </form>
        </div>
    );
};

export default From;