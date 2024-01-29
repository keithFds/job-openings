import React from 'react'
import { Link } from 'react-router-dom';

export const Vaccancy = ({ Job }) => {
    return (
        <>
            <div>
                {
                    Object.entries(Job).map(([department, jobs]) => (
                        <div key={department}>
                            <h2 className='text-3xl font-bold'>{department}:</h2>
                            <div className='bg-blue-500 h-1 w-[100px] mt-2'></div>

                            <div>
                                {
                                    jobs.map(job => (
                                        <div className='lg:flex md:flex block justify-between gap-x-2 my-10' key={job.id}>
                                            <div>
                                                <h2 className='text-2xl font-bold'>{job.title}</h2>
                                                <div className='flex justify-start gap-x-1 text-sm'>
                                                    <div className='py-1 px-2'>
                                                        <span className='material-symbols-outlined translate-y-1.5'>
                                                            apartment
                                                        </span>

                                                        <span className='ml-1'>{job.department.title}</span>
                                                    </div>

                                                    <div className='py-1 px-2'>
                                                        <span className='material-symbols-outlined translate-y-1.5'>
                                                            location_on
                                                        </span>

                                                        <span className='ml-1'>{job.location.title}</span>
                                                    </div>

                                                    <div>
                                                        <div className='bg-gray-200 py-1 px-2 rounded-md translate-y-2'>
                                                            {job.type}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <a href={job.applyUrl} target='_blank'>
                                                    <button type='button' className='mr-2 rounded-full font-bold py-2 px-4 border border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600'>Apply</button>
                                                </a>

                                                <Link to={`/vaccancy-details/${job.id}`}>
                                                    <button type='button' className='rounded-full font-bold py-2 px-4 text-gray-500 hover:bg-blue-500 hover:text-white'>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
