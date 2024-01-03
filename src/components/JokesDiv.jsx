import React from 'react'

const JokesDiv = ({setup,delivery,type}) => {
  return (
          <div className='relative mt-2 px-3 py-2 w-full flex flex-col bg-gray-100 '>
                
                <div className="text-bold whitespace-pre-wrap ">
                    {setup}
                </div>
                <br />
                <div className=''>
                   {delivery}
                </div>

                <div className="ml-auto me-3 bg-gray-800 px-1 py-1 text-white rounded">
                     {type}
                </div>

            </div>
  )
}

export default JokesDiv