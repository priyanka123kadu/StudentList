import React from 'react';
const StudentList=(props)=>{
    return(
        <>
        <div className='remove'>
            
            <button onClick={()=>{
                props.onSelect(props.id);

            }}>Delete</button>
            <li>{props.text}</li>


        </div>
        </>
    )
}

export default StudentList;