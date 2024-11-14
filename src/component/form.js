import { useState } from 'react';

function FormComponent() {
    const [inputValue, setInputValue] =useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] =useState('');
    

    const handleSubmit = (e) => {e.preventDefault(); alert(`Submitted: ${formData}`);};

    return ( 
        <div className='flex flex-col items-center justify-content h-screen'>
            <label className='text-lg font-bold'>Enter your name:</label>
             <input className='border-4 border-black border-solid rounded-md p-2' type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
             <p>Input Value: {inputValue}</p>
             <label className='text-lg fony-bold'>Enter your cars</label>
             <select value={selectedValue} onChange={(e) => setSelectedValue (e.target.value)}>
                <option value="" >Select an option</option>
                <option value="Lamborgini" >Lamborgini</option>
                <option value="Porsche" >Porsche</option>
                <option value="Benz" >Benz</option>
             </select>
             <p>Selected Value: {selectedValue}</p>
             <input type="text" value={formData} onChange={(e)=>setFormData(e.target.value)}></input>
             <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleSubmit}>Submit</button>
        </div>
    
);
}

export default FormComponent;