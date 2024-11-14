import { useState } from 'react';

function SubmitComponent() {
    const [formData, setFormData] =useState('');
    

    const handleSubmit = (e) => {e.preventDefault(); alert(`Submitted: ${formData}`);};

    return ( 
        <div className='flex flex-col items-center justify-content h-screen'>
            <label className='text-lg font-bold'>Username:</label>
             <input className='border-4 border-black border-solid rounded-md p-2' type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
             <p>Username:{inputValue}</p>

             <label className='text-lg font-bold'>Password:</label>
             <input className='border-4 border-black border-solid rounded-md p-2' type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
             <p>Password:{inputValue}</p>
             
             <input type="text" value={formData} onChange={(e)=>setFormData(e.target.value)}></input>

             <button className='bg-blue-500 text-white p-2 rounded-md' onSubmit={handleSubmit}>Submit</button>
        </div>
    
);
}

export default SubmitComponent;