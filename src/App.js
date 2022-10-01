import './App.css';
import OutputView from "./Output/OutputView";
import ModalView from "./Modal/ModalView";
import InputField from "./InputField/InputField";
import {useState} from "react";
function App() {
    const [userList, setUserList] =useState([]);
    const [error, setError] =useState(false);
    const [modaltext, setModalText] =useState("");
    const saveDataHandler = (data) =>{
        setUserList(
            (prevState)=>{
                return [data, ...prevState]
            }
        );
    }



    // const showModalHandler = (value) => {
    //     return <ModalView message={value}/>;
    // }
    const checkErrorHandler = (datas) => {
        const PrevUserNameCheckHandler= (data) => {
          let NameCheck = userList.filter(item => item.name === data.name);
          console.log(NameCheck.length);
          return NameCheck.length;
        }
        console.log(datas.age,"this is datas.age");

        if (datas.age < 0 || PrevUserNameCheckHandler(datas)>0){
          if (PrevUserNameCheckHandler(datas) > 0){
              const modaltexttemp ="User-Name already Exists";
              setModalText(modaltexttemp);

          }else if (datas.age < 0){
              const modaltexttempp ="Age cant be a zero or a negative value.";
              setModalText(modaltexttempp);
          }else {

              setModalText("Unknown Error");
          }
            setError(true);

        }else{
            saveDataHandler(datas);
            console.log(modaltext);
        }
    }
    // const ModalCloseHandler = (x) => {
    //     if (!x){
    //     setError(false);
    //     }
    //     console.log(error);
    // }
  return (
    <main className='flex flex-col gap-7 h-screen p-20 items-center'>
      <InputField onSave={checkErrorHandler}/>
      <OutputView data={userList} />
      <ModalView status={error} message={modaltext}/>
    </main>
  );
}

export default App;
