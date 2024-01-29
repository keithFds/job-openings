import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Search = ({ setFilter, Filter }) => {
    const [Department, setDepartment] = useState([]);
    const [Location, setLocation] = useState([]);
    const [Function, setFunction] = useState([]);

    const getSearchOptions = async () => {
        try {
            const departmentRes = await axios.get(`https://teknorix.jobsoid.com/api/v1/departments`);
            setDepartment(departmentRes.data);

            const locationRes = await axios.get(`https://teknorix.jobsoid.com/api/v1/locations`);
            setLocation(locationRes.data);

            const functionRes = await axios.get(`https://teknorix.jobsoid.com/api/v1/functions`);
            setFunction(functionRes.data);
        } catch (error) {
            console.log('Search Options Not Found!');
        }
    }

    const handleFilter = (e) => {
        setFilter({
            ...Filter,
            [e.target.name]: e.target.value
        });
    }

    console.log(Filter);

    useEffect(() => {
        getSearchOptions();
    }, []);

    return (
        <>
            <div className='p-5 bg-gray-200'>
                <form className='text-gray-500'>
                    <div>
                        <input className='w-full bg-white p-2' name='jobTitle' id='jobTitle' placeholder='Seacrh for job' type="text" onChange={handleFilter} />
                    </div>

                    <div className='lg:flex md:flex block justify-between mt-3 gap-x-2'>
                        <div className='w-full my-1'>
                            <select className='w-full bg-white p-2' name="department" id="department" onChange={handleFilter}>
                                <option value="">Department</option>
                                {
                                    (Department.length > 0) ? (
                                        Department.map((dept, index) => (
                                            <option key={index} value={dept.id}>{dept.title}</option>
                                        ))
                                    ) : (
                                        <option value="" className='text-red-500'>Departments Not Found!</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className='w-full my-1'>
                            <select className='w-full bg-white p-2' name="location" id="location" onChange={handleFilter}>
                                <option value="">Location</option>
                                {
                                    (Location.length > 0) ? (
                                        Location.map((loca, index) => (
                                            <option key={index} value={loca.id}>{loca.title}</option>
                                        ))
                                    ) : (
                                        <option value="" className='text-red-500'>Locations Not Found!</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className='w-full my-1'>
                            <select className='w-full bg-white p-2' name="function" id="function" onChange={handleFilter}>
                                <option value="">Function</option>
                                {
                                    (Function.length > 0) ? (
                                        Function.map((func, index) => (
                                            <option key={index} value={func.id}>{func.title}</option>
                                        ))
                                    ) : (
                                        <option value="" className='text-red-500'>No Department Found!</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
