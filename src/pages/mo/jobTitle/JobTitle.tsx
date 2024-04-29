import React from 'react';
import { MOWrapper } from '../../../components/Wrapper';

const JobTitle: React.FC = () => {
    const jobTitles = [
        { id: 1, name: 'Margareth', title: 'Owner' },
        { id: 2, name: 'Jane Smith', title: 'Manager Operasional' },
        { id: 3, name: 'Yuna', title: 'Admin' },
    ];

    return (
        <MOWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Atma Kitchen Job Title
                </h2>
            </div>

            <div className="flex justify-end">
                <a href="/add-job-title" className="btn btn-primary mb-4">Add New Job Title</a>
            </div>

            <div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className="p-4">
                    <ul className="divide-y divide-gray-200">
                        {jobTitles.map((job) => (
                            <li key={job.id} className="py-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-base font-medium">{job.name}</h4>
                                        <p className="text-sm text-gray-500">{job.title}</p>
                                    </div>
                                    <div className="dropdown dropdown-top dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-sm m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a href="/edit-job-title">Edit</a></li>
                                            <li><a>Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MOWrapper>
    );
};

export default JobTitle;
