import React from 'react';
// import CardDataStats from '../../components/CardDataStats';
import { MOWrapper } from '../../../components/Wrapper';

const DashboardMO: React.FC = () => {
    return (
        <MOWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Manager Operasional Dashboard
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-6 2xl:gap-7.5">
                <div className="card w-full bg-white shadow-xl border col-span-3">
                    <div className="card-body p-0">
                        <h2 className="card-title text-xl p-4">Ingredients Usage</h2>

                    </div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

            </div>
        </MOWrapper>
    );
};

export default DashboardMO;
