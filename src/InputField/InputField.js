import React, {useState} from "react";

const InputField = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const changeNameHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const changeAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const PrevUserNameCheckHandler = (names) => {
        let NameCheck = props.users.filter(item => item.name.toUpperCase() === names.name.toUpperCase());
        return NameCheck.length;
    }
    // const EnteredAgeCheckHandler = () => {
    //    return  enteredAge < 1;
    // }


    const CheckErrorHandler = (datas) => {

        if (datas.age < 1 && PrevUserNameCheckHandler(datas) > 0) {
            props.modalText("Age cant be a zero or a negative value and User-Name already Exists");
            props.errorModal(true);
        } else if (PrevUserNameCheckHandler(datas) > 0) {
            props.modalText("User-Name already Exists");
            props.errorModal(true);
        } else if (datas.age < 1) {
            props.modalText("Age cant be a zero or a negative value");
            props.errorModal(true);
        } else if (isNaN(datas.age)  || datas.name === '') {
            props.modalText("Inappropriate inputs");
            props.errorModal(true);
        } else {
            props.onSave(datas);
            setEnteredName('');
            setEnteredAge('');
            props.errorModal(false);
        }

    }

        const submitHandler = (event) => {
            event.preventDefault();

            const datas = {
                name: enteredName,
                age: parseInt(enteredAge, 10),
                id: Math.random()
            }
            console.log(datas);
            CheckErrorHandler(datas);

        }
        return (
            <form className='rounded-lg bg-slate-50 w-full md:w-fit shadow h-fit px-10 pt-4 pb-8 border border-gray-200 flex flex-row gap-6 items-end '
                  onSubmit={submitHandler}>
                <div>
                    <label className='block'>
                        Name
                    </label>
                    <input className='px-2 h-7 rounded border border-gray-400' type="text" onChange={changeNameHandler}
                           name="" value={enteredName} id=""/>
                </div>
                <div>
                    <label className='block'>
                        Age
                    </label>
                    <input className='px-2 h-7 rounded border border-gray-400' type="number" onChange={changeAgeHandler}
                           value={enteredAge} name="" id=""/>
                </div>
                <button type="submit"
                        className='rounded mt-4 w-fit px-8 bg-gray-700 h-7 font-semibold text-sm text-white'>Add Entry
                </button>
            </form>
        )

}

export default InputField;