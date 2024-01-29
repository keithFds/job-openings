import axios from 'axios';
import facebookIcon from '../icons/facebook.png';
import linkedinIcon from '../icons/linkedin.png';
import twitterIcon from '../icons/twitterIcon.png';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OtherJob } from './OtherJob';

export const VaccancyDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [JobData, setJobData] = useState(null);
    const [FilterJob, setFilterJob] = useState([]);

    const getJobData = async () => {
        try {
            const jobDataRes = await axios.get(`https://teknorix.jobsoid.com/api/v1/jobs/${id}`);

            if (jobDataRes.data) {
                setJobData(jobDataRes.data);
                const jobRes = await axios.get(`https://teknorix.jobsoid.com/api/v1/jobs`);
                const filteredJob = jobRes.data.filter(item => item.department.title === jobDataRes.data.department.title);
                setFilterJob(filteredJob);
            }
            else {
                navigate('*');
            }
        } catch (error) {
            console.log("Unexpected Error Occured!");
        }
    }

    useEffect(() => {
        getJobData();
    }, [id]);


    return (
        <>
            {
                (JobData != null) ? (
                    <>
                        <div className='p-5 border-b border-black'>
                            <p className='font-bold capitalize'>development department at teknorix systems goa</p>
                            <h1 className='font-bold text-3xl'>{JobData.title}</h1>
                            <div className='lg:flex md:flex block justify-start gap-x-1'>
                                <div className='py-1 px-2'>
                                    <span className='material-symbols-outlined translate-y-1.5'>
                                        apartment
                                    </span>

                                    <span className='ml-1'>{JobData.department.title}</span>
                                </div>

                                <div className='py-1 px-2'>
                                    <span className='material-symbols-outlined translate-y-1.5'>
                                        location_on
                                    </span>

                                    <span className='ml-1'>{JobData.location.title}</span>
                                </div>

                                <div>
                                    <div className='bg-gray-200 py-1 px-2 rounded-md translate-y-1.5'>
                                        {JobData.type}
                                    </div>
                                </div>
                            </div>

                            <div className='my-8'>
                                <a href={JobData.applyUrl} target='_blank'>
                                    <button type='button' className='text-white bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-16'>Apply</button>
                                </a>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 gap-x-2'>
                            <div className='p-5 lg:col-span-3 md:col-span-2 col-span-4' dangerouslySetInnerHTML={{ __html: JobData.description }}></div>

                            <div className='p-5 lg:col-span-1 md:col-span-2 col-span-4'>
                                <div className='w-full rounded-md bg-gray-200 border-2 border-gray-300 p-3'>
                                    <div>
                                        <h2 className='font-bold text-xl uppercase'>Other Job Openings</h2>
                                        <div className='bg-blue-500 h-1 w-[50px]'></div>
                                    </div>

                                    <div>
                                        {
                                            FilterJob.map((job) => (
                                                <OtherJob key={job.id} id={job.id} title={job.title} department={job.department.title} location={job.location.title} />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <h2 className='font-bold uppercase text-xl'>Share Job Openings</h2>
                                    <div className='bg-blue-500 h-1 w-[50px]'></div>

                                    <div className='flex justify-start mt-3'>
                                        <a href="#">
                                            <div className='rounded-full p-2 border border-black bg-white mr-2'>
                                                <img className='w-[20px]' src={facebookIcon} alt="facebook" />
                                            </div>
                                        </a>

                                        <a href="#">
                                            <div className='rounded-full p-2 border border-black bg-white mr-2'>
                                                <img className='w-[20px]' src={linkedinIcon} alt="lindedin" />
                                            </div>
                                        </a>

                                        <a href="#">
                                            <div className='rounded-full p-2 border border-black bg-white mr-2'>
                                                <img className='w-[20px]' src={twitterIcon} alt="twitter" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className='text-center mt-10 text-3xl'>Loading.....</p>
                )
            }
        </>
    )
}
