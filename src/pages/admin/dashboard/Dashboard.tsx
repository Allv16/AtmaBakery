import React, { useState } from "react";
// import CardDataStats from '../../components/CardDataStats';
import { AdminWrapper } from "../../../components/Wrapper";
import { AdminTaskTable } from "../../../components/Table/Table";
import { getAllTransactionAdminToDo } from "../../../lib/repository/TransactionRepository";
import { ConfirmationModal, InputRangeModal } from "../../../components/Modal";

const Dashboard: React.FC = () => {
  const {
    data: taskData,
    isLoading: taskIsLoading,
    isValidating: taskIsValidating,
  } = getAllTransactionAdminToDo();

  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    console.log(index);

    setSelectedTask(index);

    setTimeout(() => {
      const dialog = document.getElementById(
        "range_modal"
      )! as HTMLDialogElement;
      dialog.showModal();
    }, 300); //
  };

  return (
    <AdminWrapper>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-xl font-serif font-bold text-black">
          Admin Dashboard
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="card w-[720px] bg-white shadow-xl border">
          <div className="card-body p-0">
            <h2 className="card-title text-xl p-4 font-bol d">My Task</h2>
            {!taskIsLoading && !taskIsValidating ? (
              taskData.length > 0 ? (
                <AdminTaskTable data={taskData} onClick={handleOpenModal} />
              ) : (
                <div className="w-full py-8 flex justify-center items-center">
                  <p className="text-center text-gray-400">
                    There is no task available
                  </p>
                </div>
              )
            ) : (
              <div className="w-full py-8 flex justify-center items-center">
                <span className="loading loading-dots loading-md"></span>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedTask !== null && (
        <InputRangeModal data={taskData[selectedTask!]} />
      )}
    </AdminWrapper>
  );
};

export default Dashboard;
