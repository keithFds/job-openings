import React, { useEffect, useState } from 'react'
import { Search } from './Search'
import axios from 'axios';
import { Vaccancy } from './Vaccancy';

export const VaccancyPage = () => {
    const [Job, setJob] = useState([]);
    const [Filter, setFilter] = useState({
        jobTitle: "",
        department: "",
        location: "",
        function: ""
    });

    const getJob = async () => {
        try {
            const jobRes = await axios.get(`https://teknorix.jobsoid.com/api/v1/jobs`);

            let filteredJobs = jobRes.data;
            if (Filter.jobTitle) {
                const regex = new RegExp(Filter.jobTitle, 'i');
                filteredJobs = filteredJobs.filter(job => regex.test(job.title));
            }
            if (Filter.department) {
                filteredJobs = filteredJobs.filter(job => job.department.id === parseInt(Filter.department));
            }
            if (Filter.location) {
                filteredJobs = filteredJobs.filter(job => job.location.id === parseInt(Filter.location));
            }
            if (Filter.function) {
                filteredJobs = filteredJobs.filter(job => job.function.id === parseInt(Filter.function));
            }

            const groupedByDepartment = filteredJobs.reduce((acc, obj) => {
                const departmentTitle = obj.department.title;
                acc[departmentTitle] = [...(acc[departmentTitle] || []), obj];
                return acc;
            }, {});

            setJob(groupedByDepartment);
        } catch (error) {
            console.log("Unexpected Error Occured!");
        }
    }

    useEffect(() => {
        getJob();
    }, [Filter]);

    return (
        <div className='p-3'>
            <Search setFilter={setFilter} Filter={Filter} />

            {
                (Object.keys(Job).length > 0) ? (
                    <Vaccancy Job={Job} />
                ) : (
                    <p className='text-red-500 text-3xl text-center mt-10'>No Vaccancies At The Moment!</p>
                )
            }
        </div>
    )
}
