import { InputForm } from "../../../components/Input";
import { Label } from "../../../components/Label";
import { NavWrapper } from "../../../components/Wrapper";

export default function Profile() {
  return (
    <NavWrapper>
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12 border">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-14 p-1 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Bordered avatar"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="pl-3 text-xl font-semibold">Username</h2>
                <h6 className="pl-3 text-sm font-semibold">20 points</h6>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-bold bg-white text-lg"
            >
              Settings
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold text-lg"
            >
              Order
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold text-lg"
            >
              History
            </a>
          </div>
        </aside>
        <main className="w-full min-h-screen gap py-4 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4 border">
            <div className="w-full px-3 pb-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-2 flex items-center text-2xl font-serif font-semibold sm:text-xl">
                <a
                  href="/profile"
                  className="text-primary"
                >
                  Personal Profile
                </a>
                <span className="mx-2"></span>
                <a
                  href="/address-list"
                  className="text-primary"
                >
                  Address List
                </a>
              </h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-primary dark:ring-primary"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Bordered avatar"
                  />
                  <div className="flex flex-col w-full space-y-2 pl-7">
                    <div>
                      <Label children="Name" />
                      <InputForm
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="pt-4">
                      <Label children="Phone Number" />
                      <InputForm
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="pt-4">
                      <Label children="Date of Birth" />
                      <InputForm
                        type="date"
                        placeholder="Enter your date of birth"
                      />
                    </div>
                    <div className="pt-4">
                      <Label children="Gender" />
                      <InputForm type="text" placeholder="Enter your gender" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </NavWrapper>
  );
}
