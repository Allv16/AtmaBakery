import { Label } from "./Label";
import { InputForm } from "./Input";

export const FormLogin = () => {
  return (
    <form className="card">
      <div className="form-control">
        <Label children="Email Address"></Label>
        <InputForm
          type="email"
          placeholder="youremailadrress@email.com"
          className="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        />
      </div>
      <div className="form-control mt-16">
        <Label children="Password"></Label>
        <InputForm
          type="password"
          placeholder="Enter your password"
          className="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        />
        <label className="label-text px-0 text-end pt-2">
          <a href="#" className="label-text link link-hover text-primary">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-16">
        <button className="btn btn-lg btn-primary font font-semibold">
          Login
        </button>
        <p className="label-text mt-6 text-center text-l">
          Don't have an account ?{" "}
          <a href="#" className="label-text link link-hover font-bold text-l text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
};

export const FormRegister = () => {
  return (
    <form className="card">
      <div className="form-control mt-5">
        <Label children="Full Name"></Label>
        <InputForm
          type="text"
          placeholder="Enter your full name"
          className="peer h-10 w-full border-b border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600"
        />
      </div>
      <div className="form-control mt-10">
        <Label children="Email Address"></Label>
        <InputForm
          type="email"
          placeholder="Enter your email address"
          className="peer h-10 w-full border-b border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600"
        />
      </div>
      <div className="form-control mt-10">
        <Label children="Password"></Label>
        <InputForm
          type="password"
          placeholder="Enter your password"
          className="peer h-10 w-full border-b border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600"
        />
      </div>
      <div className="form-control mt-16">
        <button className="btn btn-lg btn-primary font font-semibold">
          Create Account
        </button>
        <p className="label-text mt-4 text-center text-l">
          Already have an account ?{" "}
          <a href="#" className="label-text link link-hover font-bold text-l text-primary">
            Sign In
          </a>
        </p>
      </div>
    </form>
  );
};
