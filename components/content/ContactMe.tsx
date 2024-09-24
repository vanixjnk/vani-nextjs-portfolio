"use client";
import AnimationContainer from "../utils/AnimationContainer";
import { Modal, Button } from "antd";
import { Toaster, toast as hotToast } from "react-hot-toast";
import Link from "next/link";

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      hotToast.success("Copy thành công!", {
        position: "top-center",
        duration: 5000,
      });
    })
    .catch((error) => {
      console.error("Copy thất bại:", error);
    });
};

const ContactMe = () => {
  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="font-bold text-2xl md:text-2xl tracking-tight mb-8 text-white text-center lg:text-start"
        id="contact"
      >
        Contact me
      </h2>

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <div className="w-full rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
            <h6 className="font-bold text-1xl tracking-tight text-white text-start">
              Email
            </h6>
            <p className="text-base mt-2 text-gray-400">vanixjnk@gmail.com</p>
            <div className="w-full flex justify-between items-start flex-wrap flex-col lg:flex-row gap-5">
              <div className="flex justify-center items-start gap-3"></div>
              <div className="flex justify-center items-end gap-3">
                <button
                  aria-label="Copy"
                  onClick={() => copyToClipboard("+84 (0) 935 974 907")}
                  className="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
            <h6 className="font-bold text-1xl tracking-tight text-white text-start">
              Phone
            </h6>
            <p className="text-base mt-2 text-gray-400">+84 (0) 935 974 907</p>
            <div className="w-full flex justify-between items-start flex-wrap flex-col lg:flex-row gap-5">
              <div className="flex justify-center items-start gap-3"></div>
              <div className="flex justify-center items-end gap-3">
                <button
                  aria-label="Copy"
                  onClick={() => copyToClipboard("+84 (0) 935 974 907")}
                  className="text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <form
            action="https://formspree.io/f/xdorkorr"
            method="POST"
            className="w-full space-y-4"
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full h-32 rounded p-3 text-base outline-none border text-white bg-black border-gray-900 focus:border-gray-800 transition ease"
                placeholder="Message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center rounded px-5 py-3 text-white bg-black hover:bg-gray-900 shadow-sm transition ease mx-auto"
            >
              <span className="font-medium text-base">Send</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <Toaster /> {/* Place Toaster here */}
    </AnimationContainer>
  );
};

export default ContactMe;
