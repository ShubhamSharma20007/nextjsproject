import Link from 'next/link'
import React from 'react'
const Card = (props) => {
    const {data} = props
    console.log(data)

  if(!data){
    return <div>...Loading</div>
  }
  return (
    <div>
       {
        data.map((item,index)=>{
            return(
                <>
                 <div className="card min-h-60 h-60 shadow-md w-52 m-5 border inline-block relative">
           <div className="img-container w-full h-1/2">
            <img src={item.thumbnail} className='object-contain w-full h-full' alt="" />
           </div>
           <div className="context p-2 w-full flex  justify-center align-items-center flex-col">
           <p className='text-[15px] text-md font-sans font-semibold'>{item.title}</p>
           
           </div>
            <Link href={`/movie/${item.id}`}>
           <div className=" w-full  flex justify-center">
           <button type="button" className='text-center w-3/4 absolute bottom-1 bg-slate-500 hover:bg-slate-600  text-white px-3 my-3  text-sm py-2 rounded-sm '>Read More</button>
        </div>

            </Link>
        </div>
                </>
            )
        })
       }
      
    </div>
  )
}

export default Card

