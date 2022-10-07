import React from "react";

const ModalView = props => {
   const closeHandler = () =>{
       props.close(false);
       console.log(props.close)
   }
    if (props.status){
    return(
        <div onClick={props.close} className={`w-screen h-screen fixed z-10 flex items-center  backdrop-blur-[1.5px] justify-center`}>

            <div className='w-full md:w-11/12 min-h-fit px-14 py-8 flex justify-between items-center bg-slate-50 rounded relative shadow border border-gray-300'>
                <p className='text-gray-700 text-2xl'>{props.message}</p>
                <button onClick={props.close} type={"button"}   className='text-3xl font-semibold text-rose-400 hover:text-white hover:bg-slate-500 transition-all cursor-pointer px-14 rounded-3xl py-6 duration-500 leading-4'>X</button>
            </div>



        </div>
    )

    }
}


export default ModalView;