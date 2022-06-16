import React from 'react';

export const NewProduct = () => {

    //const[dataForm, setDataForm]=useState('');

    const handleOnSubmit =(e)=>{
        e.preventDefault();
        console.log(e.target.algo.value);
    };

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input name='algo' placeholder='ingresa algo'></input>
            <input name='algos' placeholder='ingresa otra cosa'></input>
            <button type='submit'>Ejemplo</button>
        </form>
    </div>
  );
};
