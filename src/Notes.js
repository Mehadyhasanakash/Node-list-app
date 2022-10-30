import React from 'react';

const Notes = ({data}) => {
  return (
    <>

      <div className="card mb-3">

        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>
          <button className="btn btn-danger mx-3">Delet</button>
        </div>
      </div>
    </>
  );
};

export default Notes;