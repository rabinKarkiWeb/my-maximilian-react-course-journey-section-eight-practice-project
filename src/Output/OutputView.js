import React from "react";

const OutputView = props => {
    return(
        <ul className={`list-outside list-disc space-y-2 w-full md:w-fit text-center  mx-auto`}>
            {props.data.map(
                (data)=>(
                    <li key={data.id} className='bg-gray-50 py-1 px-8 hover:cursor-pointer hover:bg-cyan-200 border border-gray-200 shadow rounded'>
                        <div className='text-2xl font-semibold'>
                            <span className='text-gray-700 space-x-2 capitalize'>
                                {data.name}
                            </span>
                             <span> : </span>
                            <span className='text-emerald-700'>
                                {data.age}
                            </span>
                        </div>
                    </li>
                )
            )}
        </ul>
    );

}

export default OutputView;