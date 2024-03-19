import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const mailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const error = {};
    if (!email || !mailRegex.test(email)) {
      error.email = "Please enter a valid email";
    }

    const passwordRegex = /^([^!#$%^&*()_+\-=\[\]{};':",./<>?\|`~ ]){8,}$/;

    if (!password || !passwordRegex.test(password)) {
      error.password =
        "Password must not contain any special characters except @ and must be at least 8 characters long.";
    }
    setError(error);

    if (password === "ZenTradesTest@123") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex px-6 py-12 justify-center">
      <div className="px-6 py-12 lg:px-8 bg-slate-800 w-96">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQEWvdgwLcSBVg/company-logo_200_200/0/1677706459392/zentrades_logo?e=2147483647&v=beta&t=XB-JZBSt4vMfDJioIxisUi70J61nlXsVMdXM-BW6WwE"
            alt="Zentrades Logo"
            className="w-36 h-36 mx-auto rounded-full"
          />
        </div>

        <div className="mt-10 sm:mx-auto w-64">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2  placeholder:text-gray-400"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs italic p-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2  placeholder:text-gray-400 "
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs italic p-1">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center mb-5">
              <input
                id="remember"
                type="checkbox"
                className="accent-red-400 cursor-pointer h-5 w-5 rounded border-gray-30 focus:ring-red-400 focus:ring-1"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-white "
              >
                Remember Me
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="m-4 p-4">
            <a
              href="mailto:support@zentrades.pro"
              target="_blank"
              className="font-semibold leading-6 text-white hover:text-indigo-500"
            >
              Forgot Your Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
