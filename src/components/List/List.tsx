import React, { useState } from 'react';
import { IRoles } from '../../lib/interfaces/IRoles';

type RolesListProps = {
    rolesData: IRoles[];
}

export const JobTitleList: React.FC<RolesListProps> = ({ rolesData }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="p-4">
                <ul className="divide-y divide-gray-200">
                    {rolesData.map((roles) => (
                        <li key={roles.id_role} className="py-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-base font-medium">{roles.nama_role}</h4>
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
    );
}