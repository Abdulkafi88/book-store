import React from 'react'
import {Link , useParams} from 'react-router-dom'
const CartDetails = () => {
    const params = useParams()
  return (
   <main>
    <section>
        <p className='text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8'>my Cart()</p>
    </section>
    <section>
        <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
            <div className="flex">
                <Link></Link>
            </div>
        </div>
    </section>
   </main>
  )
}

export default CartDetails
