import React, { ChangeEvent, FormEvent, useState } from "react";
import EnvelopIcon from "@/components/icons/EnvelopIcon";
import { VALID_EMAIL_REGEX } from "@/constants/regex";

interface EmailContentProps {
  getEmailValue?: (val: string) => void;
  onContinue?: (val: string) => void;
}

const EmailContent: React.FC<EmailContentProps> = ({ onContinue }) => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isActiveContinueBtn, setIsActiveContinueBtn] = useState(false);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsError(e.target.value.toString().match(VALID_EMAIL_REGEX) === null);
    setIsActiveContinueBtn(
      e.target.value.toString().match(VALID_EMAIL_REGEX) !== null
    );
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isActiveContinueBtn && onContinue && onContinue(email);
  };

  return (
    <div className="m-auto w-[90%] layout-875px:w-screen flex flex-col layout-749px:flex-row justify-center items-start overflow-hidden rounded-[8px]">
      <div className="bg-cyan-800 w-full layout-875px:w-[400px] p-[16px] h-[240px]">
        <div className="text-center text-white">Get Access to your content</div>
        <div className="text-center text-white font-extrabold mb-[16px]">
          3 Easy Steps
        </div>
        <div className="relative">
          <div className="bg-cyan-200 absolute w-[2px] h-[100px] left-[14px] top-0"></div>
          <div className="flex justify-start items-center mb-[16px] relative z-10">
            <span className="h-[30px] w-[30px] rounded-[30px] bg-white text-cyan-800 flex flex-col justify-center items-center mr-[16px]">
              1
            </span>

            <span className="text-white text-[14px] text-white">
              Create your Free Account
            </span>
          </div>
          <div className="flex justify-start items-center mb-[16px] relative z-10">
            <span className="h-[30px] w-[30px] rounded-[30px] text-white bg-cyan-600 text-cyan-800 flex flex-col justify-center items-center mr-[16px]">
              2
            </span>

            <span className="text-white text-[14px] text-cyan-400">
              Verify your Account
            </span>
          </div>
          <div className="flex justify-start items-center mb-[16px] relative z-10">
            <span className="h-[30px] w-[30px] rounded-[30px] text-white bg-cyan-600 flex flex-col justify-center items-center mr-[16px]">
              3
            </span>

            <span className="text-white text-[14px] text-cyan-400">
              Get Access to your content
            </span>
          </div>
        </div>
      </div>
      <form onSubmit={onHandleSubmit}>
        <div className="bg-white w-full layout-875px:w-[400px] p-[16px] h-[240px]">
          <div className="text-center text-cyan-800 font-extrabold mb-[16px]">
            Create your Free Account
          </div>
          <div className="mb-[16px]">
            <div className="h-[50px] w-full border rounded-[4px] relative">
              <div className="left-0 top-0 h-[50px] w-[50px] absolute left-0 flex flex-col justify-center items-center">
                <EnvelopIcon />
              </div>
              <input
                value={email}
                onChange={onChangeEmail}
                type="text"
                name=""
                placeholder="Enter your email"
                className="w-full pr-[16px] border-none outline-none pl-[50px] h-full border-none"
              />
            </div>
            {isError && (
              <p className="text-red-400 mt-[8px]">Please enter valid email!</p>
            )}
          </div>

          <button
            onClick={() => onContinue && onContinue(email)}
            disabled={!isActiveContinueBtn}
            className={`${
              isActiveContinueBtn ? "bg-green-500" : "bg-gray-600"
            } h-[50px] rounded-[4px] w-full flex justify-center items-center text-white font-extrabold mb-[16px]`}
          >
            Continue
          </button>

          <p className="text-[10px] text-center text-gray-400">
            By clicking on "Continue", you agree with the Terms & Conditions and
            the Privacy Policy
          </p>
        </div>
      </form>
    </div>
  );
};

export default EmailContent;
