import './App.css';
import OutputView from "./Output/OutputView";
import ModalView from "./Modal/ModalView";
import InputField from "./InputField/InputField";
import {useState} from "react";
import ReactDOM from "react-dom"
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
    const setErrorModal = (x) => {
        setError(x);
    }
    const ModalTextHandler = (x) => {
        setModalText(x);
    }
    const ModalCloseHandler = () => {
        setError(false);
    }



    // const showModalHandler = (value) => {
    //     return <ModalView message={value}/>;
    // }

    // const ModalCloseHandler = (x) => {
    //     if (!x){
    //     setError(false);
    //     }
    //     console.log(error);
    // }
  return (
    <main className='flex bg-slate-300 flex-col gap-7 h-screen pt-36 items-center'>
      <InputField onSave={saveDataHandler} users={userList} errorModal={setErrorModal} modalText={ModalTextHandler}/>
      <OutputView data={userList} />
        {ReactDOM.createPortal(
      <ModalView status={error} message={modaltext} close={ModalCloseHandler}/>,
            document.getElementById('modal')
        )
        }
    </main>
  );
}

export default App;
