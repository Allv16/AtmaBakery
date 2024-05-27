import React from "react"
import { MOWrapper } from "../../../components/Wrapper";

const TaskOrder: React.FC = () => {
    return (
        <MOWrapper>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-xl font-serif font-bold text-black">
                    Task Order
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-6 2xl:gap-7.5">
                <div className="card w-full bg-white shadow-xl border col-span-3">
                    <div className="card-body p-0">
                        <h2 className="card-title text-xl p-4">My Task</h2>

                    </div>
                </div>
                <div className="col-span-3">
                    <div className="card w-full bg-white shadow-xl border h-fit">
                        <div className="card-body p-0">
                            <h2 className="card-title text-xl p-4 ">
                                On Process Order
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </MOWrapper>
    );
};

export default TaskOrder;