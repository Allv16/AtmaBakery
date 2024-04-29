import { InputForm } from "../../../components/Input";
import { Label } from "../../../components/Label";

export default function resetPassword() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
        <div className="max-w-auto flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold font-cormorant">
            Reset Password
          </h1>
          <p className="py-6 text-gray-500">
            There is nothing to worry about, we'll send you a message to help
            you reset your password.
          </p>

          <div className="form-control w-full mt-9">
            <Label children="Email Address"></Label>
            <InputForm
              type="email"
              placeholder="Enter your email address"
              className="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            />
          </div>
          <div className="form-control w-full mt-9">
            <Label children="New Password"></Label>
            <InputForm
              type="password"
              placeholder="Enter your new password"
              className="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            />
          </div>
          <div className="form-control w-full mt-9">
            <Label children="Confirm Password"></Label>
            <InputForm
              type="password"
              placeholder="Re-enter your new password"
              className="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            />
          </div>
          <div className="form-control mt-16 w-full">
            <button className="btn btn-md btn-primary font font-semibold">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
