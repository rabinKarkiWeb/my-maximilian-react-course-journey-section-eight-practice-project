import React from "react";

const ModalView = props => {
   // const closeHandler = () =>{
   //     props.close(false);
   //     console.log(props.close)
   // }
    if (props.status){
    return(
        <React.Fragment>
        <div onClick={props.close} className={`w-screen h-screen backdrop-blur-[2px] fixed`}>
        </div>

            <div className='w-full fixed md:w-11/12 min-h-fit px-14 py-8 flex z-10 top-1/3 right-1/2 translate-x-1/2 justify-between items-center bg-slate-50 rounded  shadow border border-gray-300'>
                <p className='text-gray-700 text-2xl'>{props.message}</p>
                <button onClick={props.close} type={"submit"}   className='text-3xl font-semibold text-rose-400 hover:text-white hover:bg-slate-500 transition-all cursor-pointer px-14 rounded-3xl py-6 duration-500 leading-4'>X</button>
            </div>

        </React.Fragment>



    )

    }
}


export default ModalView;