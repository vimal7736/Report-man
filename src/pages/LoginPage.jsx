import React, { useState } from "react";
import vector from "../../src/images/vector123.png";
import laptop from "../../src/images/LightLaptop.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update state based on input name
    if (name === "email") {
      setEmail(value);
      validateEmail();
    } else if (name === "password") {
      setPassword(value);
      validatePassword();
    }
  };

  const validateEmail = () => {};

  const validatePassword = () => {};

  const validateForm = () => {
    validateEmail();
    validatePassword();
    return Object.values(errors).every((error) => error === "");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (validateForm()) {
    }
  };

  return (
    <div className="bg-white h-screen  ">
      <div className="bg-stone-50 border    flex h-[30px] p-7">
        <div className="text-black text-lg shadow font-normal font-['Inter']">
          Logo{" "}
        </div>
        <div className="grow shrink basis-0 text-black text-[11px] text-right font-normal font-['Inter']">
          Last updated time 09-Aug-2023 08:09 AM
        </div>
      </div>

      <div className="flex flex-wrap bg-white  gap-[100px] ml-[100px] p-12   ">
        <div className="bg-white">
          <div className="relative">
            <img
              className="opacity-25 w-[449.09px] h-[453px] "
              src={vector}
              alt="Background"
            />
            <img
              className="absolute top-0 left-0 w-[499px] h-[410.48px]"
              src={laptop}
              alt="Overlay"
            />
          </div>
        </div>
        <div className="">
          <div className="p-10 w-[500px] ">
            <div className="  text-white text-base font-normal font-['Inter'] gap-[30px] ">
              "Welcome to the future of restaurant reporting! We're serving up a
              fresh approach to streamline your restaurant management, making
              data deliciously easy to digest."
              <br />
              <br />
            </div>
            <div className="gap-[30px] ">
              <div className=" self-center w-auto h-[300px] p-5 bg-stone-50 rounded-[20px] shadow flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[114px] flex-col justify-start items-start gap-2.5 flex">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    onBlur={validateEmail}
                    placeholder="E-mail"
                    className={`self-stretch h-[52px] w-[380px] p-3 bg-gray-200 rounded-[10px] ${
                      errors.email && "border-red-500"
                    }`}
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={handleInputChange}
                      onBlur={validatePassword}
                      className={`self-stretch w-[380px] h-[52px] p-3 bg-gray-200 rounded-[10px] ${
                        errors.password && "border-red-500"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="absolute right-4 top-2 text-gray-500"
                    >
                      {showPassword ? "👁️" : "👁️"}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="self-stretch h-[79px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch p-3 bg-neutral-900 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                    <Link to="/branch">
                      <div
                        onClick={handleLogin}
                        className="text-center text-stone-50 text-sm font-semibold font-['Poppins']"
                      >
                        Login
                      </div>
                    </Link>
                  </div>
                  <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center">
                      <span className="text-zinc-700 text-[10px] font-normal font-['Poppins']">
                        By continuing, you agree to (name)’s{" "}
                      </span>
                      <span className="text-neutral-700 text-[11px] font-semibold font-['Poppins']">
                        Terms of
                        <br />
                        service
                      </span>
                      <span className="text-zinc-800 text-[11px] font-semibold font-['Poppins']">
                        {" "}
                      </span>
                      <span className="text-zinc-800 text-[11px] font-normal font-['Poppins']">
                        and
                      </span>
                      <span className="text-neutral-900 text-[11px] font-semibold font-['Poppins']">
                        {" "}
                        Privacy policy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
