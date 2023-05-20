import React, { useState } from "react";

function Estado(){

    const[numero, setNumero] = useState(0);
    const[name, setName] = useState('');

    function handleClicksSomar()
    {
        setNumero(numero + 1);
    }

    function handleClicksSubtrair()
    {
        setNumero(numero - 1);
    }

    function handleChangeNome(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    return(
        <div>   
            <h1>O VALOR É: {numero}</h1>
            <br/>

            <hr/>
            <label> INSIRA O NOME: </label>
            <input type='text' value={name} onChange={handleChangeNome} />
            <br/>
            <label> SEU NOME É {name} </label>
            <hr/>

            <br/>
            <button className="btnSomar" onClick={handleClicksSomar}> SOMAR </button>
            <br/>            
            <button className="btnSubtrair" onClick={handleClicksSubtrair}> SUBTRAIR </button>
        </div>
    )
}

export default Estado;