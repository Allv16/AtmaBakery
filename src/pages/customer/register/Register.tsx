import { FormRegister } from "../../../components/Form";
import images from "../../../assets/images/f9idlhrn.png";

export default function Login() {
  return (
    <div className="w-full h-screen p-20 flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[15%] left-[10%] flex flex-col">
          <h1 className="text-5xl text-white font-cormorant font-bold">
            The best way to enjoy your drink.
          </h1>
          <p className="text-2xl text-white font-cormorant font-semibold">
            Atma Kitchen
          </p>
        </div>
        <img
          src={images}
          alt="Image"
          className="w-full h-full object-cover p-10"
        />
      </div>

      <div className="w-1/2 h-full flex flex-col p-10">
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-5xl font-cormorant font-semibold mb-2">
              Create Account
            </h3>
            <p className="text-l mb-2 font-medium mt-2">
              Enter your information to create an account.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col pt-7">
          <FormRegister />
        </div>
      </div>
    </div>
  );
}