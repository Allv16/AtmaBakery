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
        />
      </div>
      <div className="form-control mt-16">
        <Label children="Password"></Label>
        <InputForm
          type="password"
          placeholder="Enter your password"
        />
        <label className="label-text px-0 text-end pt-2">
          <a href="#" className="label-text link link-hover text-xs text-primary xl:text-base">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-16">
        <button className="btn btn-sm btn-primary font font-semibold text-xs md:btn-md md:text-sm xl:btn-lg xl:text-base">
          Login
        </button>
        <p className="label-text mt-4 text-center text-xs xl:text-base">
          Don't have an account ?{" "}
          <a href="#" className="label-text link link-hover font-bold text-xs text-primary xl:text-base">
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
        />
      </div>
      <div className="form-control mt-10">
        <Label children="Email Address"></Label>
        <InputForm
          type="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="form-control mt-10">
        <Label children="Password"></Label>
        <InputForm
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="form-control mt-16">
        <button className="btn btn-sm btn-primary font font-semibold text-xs md:btn-md md:text-sm xl:btn-lg xl:text-base">
          Create Account
        </button>
        <p className="label-text mt-4 text-center text-xs xl:text-base">
          Already have an account ?{" "}
          <a href="#" className="label-text link link-hover font-bold text-xs text-primary xl:text-base">
            Sign In
          </a>
        </p>
      </div>
    </form>
  );
};
