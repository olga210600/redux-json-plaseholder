import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Inputs = ({title, body ,addNewPost,handleAddPost, handleChangeBody, handleChangeTitle, getNewBodyAndTitle}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <input value={title} onChange={handleChangeTitle} />
            <input value={body} onChange={handleChangeBody}/>
            <button onClick={handleAddPost} >Add</button>
        </div>

    );

};

export default Inputs;