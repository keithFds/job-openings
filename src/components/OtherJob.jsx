import React from 'react'
import { Link } from 'react-router-dom'

export const OtherJob = ({ id, title, department, location }) => {
    return (
        <>
            <div className='my-5'>
                <Link to={`/vaccancy-details/${id}`}>
                    <div className='font-bold translate-x-1.5'>
                        {title}
                    </div>

                    <div className='flex justify-start gap-x-1 text-sm -translate-y-2'>
                        <div className='py-1 px-2'>
                            <span className='material-symbols-outlined translate-y-1.5'>
                                apartment
                            </span>

                            <span className='ml-1'>{department}</span>
                        </div>

                        <div className='py-1 px-2'>
                            <span className='material-symbols-outlined translate-y-1.5'>
                                location_on
                            </span>

                            <span className='ml-1'>{location}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
