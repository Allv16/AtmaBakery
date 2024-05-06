import React from 'react';
import { AdminWrapper } from '../../../components/Wrapper';

const AdminProfile: React.FC = () => {
    return (
        <AdminWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Profile
                </h2>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default p-4 overflow-x-auto">

            </div>
        </AdminWrapper>
    );
};

export default AdminProfile;
