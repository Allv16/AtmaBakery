import { Label } from "../../../components/Label";
import { NavWrapper } from "../../../components/Wrapper";
import React, { useState, useEffect } from "react";
import { IProfileCustomer } from "../../../lib/interfaces/IProfileCustomer";
import { useNavigate } from "react-router-dom";
import {
  editProfile,
  getProfileCustomer,
} from "../../../lib/repository/ProfileRepository";

export default function Profile() {
  // API CALL
  const navigate = useNavigate();
  const { data, error, isLoading } = getProfileCustomer();

  const [input, setInput] = useState<IProfileCustomer>({
    id_user: "",
    id_customer: "",
    nama_customer: "",
    no_telp: 0,
    tanggal_lahir: "",
    jenis_kelamin: "",
    poin: 0,
  });

  useEffect(() => {
    if (data) {
      const inputField: IProfileCustomer = {
        id_user: data.id_user ?? "",
        id_customer: data.id_customer ?? "",
        nama_customer: data.nama_customer ?? "",
        no_telp: data.no_telp ?? 0,
        tanggal_lahir: data.tanggal_lahir ?? "",
        jenis_kelamin: data.jenis_kelamin ?? "",
        poin: data.poin ?? 0,
      };
      setInput(inputField);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };

  const handleSubmit = async () => {
    await editProfile(input, data.id_customer);
    navigate("/profile");
  };

  const ProfileForm = () => {
    const [image, setImage] = useState(
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    );

    const handleImageChange = (event: { target: { files: any[] } }) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  };

  const handleEditConfirmation = () => {
    const modal = document.getElementById("edit_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();

      const cancelEditBtn = document.getElementById(
        "cancel_edit"
      ) as HTMLButtonElement;
      cancelEditBtn.addEventListener("click", () => {
        modal.close();
      });
    }
  };

  return (
    <NavWrapper>
      <style>{`
        .hover-up {
          transition: transform 0.1s ease-in-out;
        }

        .hover-up:hover {
          transform: translateY(-3px);
        }
      `}</style>

      {isLoading && (
        <div className="w-full mt-64 flex justify-center items-center">
          <span className="loading loading-dots loading-md"></span>
        </div>
      )}
      {error && <div>Error</div>}

      <div className="bg-white h-screen mx-auto flex flex-col-2 gap-10 px-3 md:flex-row mt-20">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="flex flex-col p-4 text-sm border-r border-indigo-100 top-12 border">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="pl-3 text-xl font-semibold">
                  {input.nama_customer}
                </h2>
                <h6 className="pl-3 text-sm font-semibold">
                  {input.poin}
                  {" point"}
                </h6>
              </div>
            </div>
            <a
              href="/profile"
              className="flex items-center px-3 py-2.5 font-semibold bg-white text-lg hover-up"
            >
              Settings
            </a>
            <a
              href="/unpaid-order-list"
              className="flex items-center px-3 py-2.5 font-semibold text-lg hover-up"
            >
              Order
            </a>
            <a
              href="/order-history"
              className="flex items-center px-3 py-2.5 font-semibold text-lg hover-up"
            >
              History
            </a>
          </div>
        </aside>

        <main className="w-full min-h-screen py-4 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4 border">
            <div className="w-full mx px-3 pb-8 sm:rounded-lg">
              <h2 className="pl-2 flex items-center text-2xl font-serif font-semibold">
                <a href="/profile" className="text-primary">
                  Personal Profile
                </a>
                <span className="mx-2"></span>
                <a href="/address-list" className="text-primary">
                  Address List
                </a>
              </h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditConfirmation();
                  }}
                >
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0 sm:items-start">
                    <label htmlFor="avatar">
                      {/* <img
                        className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-primary dark:ring-primary cursor-pointer"
                        alt="Bordered avatar"
                      /> */}
                      <input
                        name="image"
                        type="file"
                        id="avatar"
                        accept="image/*"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </label>
                    <div className="flex flex-col w-full space-y-2 md:pl-7">
                      <div>
                        <Label children="Name" />
                        <input
                          name="nama_customer"
                          type="text"
                          onChange={handleChange}
                          className="peer h-10 w-full border-b border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-primary text-sm md:text-base xl:text-lg"
                          value={input.nama_customer}
                          required
                        />
                      </div>
                      <div className="pt-4">
                        <Label children="Phone Number" />
                        <input
                          name="no_telp"
                          type="number"
                          onChange={handleChange}
                          className="peer h-10 w-full border-b border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-primary text-sm md:text-base xl:text-lg"
                          value={input.no_telp}
                          required
                        />
                      </div>
                      <div className="pt-4">
                        <Label children="Date of Birth" />
                        <input
                          name="tanggal_lahir"
                          type="date"
                          onChange={handleChange}
                          className="peer h-10 w-full border-b border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-primary text-sm md:text-base xl:text-lg"
                          value={input.tanggal_lahir}
                          required
                        />
                      </div>
                      <div className="pt-4">
                        <Label children="Gender" />
                        <input
                          name="jenis_kelamin"
                          type="text"
                          onChange={handleChange}
                          className="peer h-10 w-full border-b border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-primary text-sm md:text-base xl:text-lg"
                          value={input.jenis_kelamin}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-5 mt-10">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
                <dialog id="edit_modal" className="modal" hidden>
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Confirmation</h3>
                    <p className="py-4">
                      Are you sure you want to edit your profile?
                    </p>
                    <div className="flex justify-end">
                      <form
                        method="dialog"
                        className="flex space-between gap-3"
                      >
                        <button id="cancel_edit">Cancel</button>
                        <button
                          id="confirm_edit"
                          className="btn btn-primary"
                          onClick={() => handleSubmit()}
                        >
                          Edit
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </main>
      </div>
    </NavWrapper>
  );
}