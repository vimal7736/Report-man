import React, { useState } from "react";
import vector from "../../src/images/vector123.png";
import laptop from "../../src/images/LightLaptop.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import ThemeLD from "../component/svg/ThemeLD";
import eyeClosoe from "../../src/images/EyeClose.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
      className="  grow  min-w-[700px]   h-screen sm:h-[150vh] md:h-[120vh] lg:h-screen xl:h-[100vh] "
    >
      <div className="    flex  p-7">
        <div className=" text-lg  font-normal font-['Poppins']">Logo </div>
        <div className="grow shrink basis-0  text-[11px] text-right font-normal font-['Poppins']">
          <button className="   p-2 rounded-full" onClick={toggleTheme}>
            <ThemeLD />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly   ml-[100px] p-12   ">
        <div className="">
          <div className="relative">
            <img
              style={{ transform: "rotate(45deg)" }}
              className={`opacity-25 w-[449.09px] h-[453px] rotate`}
              src={vector}
              alt="Background"
            />
            <img
              className="absolute top-0 left-9 w-[369px] h-[410.48px]"
              src={laptop}
              alt="Overlay"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="p-10  w-[500px] ">
            <div className="   text-[14px] font-medium  font-['Poppins'] gap-[30px] ">
              "Welcome to the future of restaurant reporting! We're serving up a
              fresh approach to streamline your restaurant management, making
              data deliciously easy to digest."
              <br />
              <br />
            </div>
            <div className="gap-[30px]   ">
              <div
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.textColor,
                  boxShadow: theme.shadow,
                }}
                className=" self-center w-auto h-[300px] p-5 rounded-[20px]  flex-col justify-start items-start gap-5 flex"
              >
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
                      className="absolute right-4 top-4 text-gray-500"
                    >
                      {showPassword ? (
                        <img src={eyeClosoe} />
                      ) : (
                        <img src={eyeClosoe} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="self-stretch h-[79px] flex-col justify-start items-start gap-2.5 flex">
                  <div
                    style={{
                      backgroundColor: "#141414",
                      color: "white",
                      boxShadow: theme.shadow,
                    }}
                    className={`self-stretch p-3  rounded-[10px] justify-center items-center gap-2.5 inline-flex transition-all duration-300`}
                  >
                    <Link to="/branch">
                      <div
                        onClick={handleLogin}
                        className="text-center text-sm font-semibold font-['Poppins']"
                      >
                        Login
                      </div>
                    </Link>
                  </div>

                  <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center">
                      <span className=" text-[10px] font-normal font-['Poppins']">
                        By continuing, you agree to (name)’s{" "}
                      </span>
                      <span className="text-[11px] font-semibold font-['Poppins']">
                        Terms of
                        <br />
                        service
                      </span>
                      <span className=" text-[11px] font-semibold font-['Poppins']">
                        {" "}
                      </span>
                      <span className=" text-[11px] font-normal font-['Poppins']">
                        and
                      </span>
                      <span className=" text-[11px] font-semibold font-['Poppins']">
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
