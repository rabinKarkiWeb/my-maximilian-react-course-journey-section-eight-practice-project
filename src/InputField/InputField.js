import React, {useState} from "react";

const InputField = props => {
    const [enteredName, setEnteredName]  =  useState('');
    const [enteredAge, setEnteredAge]  =  useState('');
    const changeNameHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const changeAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const datas = {
            name: enteredName,
            age: parseInt(enteredAge,10),
            id: Math.random()
        }
        props.onSave(datas);
        setEnteredName('');
        setEnteredAge('');
    }
return(
    <form className='rounded w-full md:w-fit shadow h-fit p-6 border border-gray-200 flex flex-col ' onSubmit={submitHandler}>
        <div>
        <label className='block' for="">
            Name
        </label>
            <input className='px-2 h-7 rounded border border-gray-400' type="text" onChange={changeNameHandler} name="" value={enteredName} id=""/>
        </div>
        <div>
        <label className='block' for="">
            Age
        </label>
        <input className='px-2 h-7 rounded border border-gray-400' type="number" onChange={changeAgeHandler} value={enteredAge} name="" id=""/>
        </div>
        <button type="submit" className='rounded mt-4 w-fit px-8 bg-gray-700 py-2 font-semibold text-sm text-white'>Add Entry</button>
    </form>
)
}

export default InputField;