import React from "react";

const ModalView = props => {
   const closeHandler = () =>{
       props.close(false);
       console.log(props.close)
   }
    if (props.status){
    return(
        <div className={`w-screen h-screen fixed z-10 flex items-center  backdrop-blur-[1.5px] justify-center`}>

            <div className='w-full md:w-96 min-h-fit p-5 pt-8 flex justify-between items-center bg-slate-50 rounded relative shadow border border-gray-300'>
                <p className='text-gray-700 text-2xl'>{props.message}</p>
                <button type={"button"}  className='text-3xl font-semibold text-rose-400 hover:text-black transition-all cursor-pointer duration-500 leading-4'>x</button>
            </div>



        </div>
    )

    }
}


export default ModalView;