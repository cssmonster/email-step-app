import DownloadIcon from "@/components/icons/DownloadIcon";
import EarthIcon from "@/components/icons/EarthIcon";
import SecureIcon from "@/components/icons/SecureIcon";
import SuccessIcon from "@/components/icons/SuccessIcon";
import Modal from "@/components/Modal";
import EmailContent from "@/components/EmailContent";
import { useState } from "react";
import Router from "next/router";

export default function Home() {
  const [isOpenEmailModal, setIsOpenEmailModal] = useState(false);
  const onHandleOpenEmailStep = () => {
    setIsOpenEmailModal(true);
  };
  const onContinue = (email: string) => {
    Router.push({
      pathname: "/next",
      query: { email },
    });
  };

  return (
    <>
      <Modal
        isOpen={isOpenEmailModal}
        onClose={() => setIsOpenEmailModal(false)}
      >
        <EmailContent onContinue={onContinue} />
      </Modal>
      <div className="pt-[32px]">
        <p className="pl-[0px] pr-[0px] md:pl-[180px] md:pr-[180px] text-center text-slate-500 mb-[32px] layout-400px:mb-[64px]">
          Your storage in the cloud. 5TB of Cloud Storage included for PC &
          Smartphone. Save space on your device by storing your documents in the
          Clound. Start now and enjoy your Free Trial
        </p>

        <div className="flex-col items-center layout-548px:flex layout-548px:flex-row layout-548px:items-start justify-center mb-[32px] layout-400px:mb-[64px]">
          <div className="flex justify-center items-center mb-[16px]">
            <img
              className="h-[60px]"
              src="images/online-activation.png"
              alt="online-active"
            />
          </div>
          <div className="hidden layout-548px:block mr-[24px] ml-[24px] h-[50px] w-[1px] bg-slate-200" />
          <div className="flex-col justify-center items-center">
            <div className="mb-[16px] flex justify-center items-center">
              <button
                onClick={onHandleOpenEmailStep}
                className="w-full layout-400px:w-[200px] bg-green-600 w-[200px] h-[60px] rounded-[4px] flex justify-center items-center pl-[32px] pr-[32px]"
              >
                <DownloadIcon />
                <span className="ml-[8px] text-white text-[20px] font-extrabold">
                  Continue
                </span>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[8px] h-[8px] rounded-[8px] mr-[16px] bg-green-400"></div>
              <div className="text-[12px] text-slate-500">
                High Speed & Unlimited.
              </div>
            </div>
          </div>
        </div>

        <div className="h-[150px] layout-400px:h-[200px] bg-slate-100 flex justify-center items-center mb-[32px] layout-400px:mb-[64px]">
          <div className="flex flex-col justify-cennter items-center w-[115px] layout-548px:w-[300px] border-x">
            <div className="mb-[24px]">
              <EarthIcon />
            </div>
            <div className="text-gray-800 font-extrabold text-[12px] layout-548px:text-[16px]">
              Global
            </div>
            <div className="text-slate-500 text-[10px] layout-548px:text-[16px]">
              Access
            </div>
          </div>
          <div className="flex flex-col justify-cennter items-center w-[200px] layout-548px:w-[300px] border-x">
            <div className="mb-[24px]">
              <DownloadIcon fill="black" size="48px" />
            </div>
            <div className="text-gray-800 font-extrabold text-[12px] layout-548px:text-[16px]">
              Unlimited Speed
            </div>
            <div className="text-slate-500 text-[10px] layout-548px:text-[16px]">
              5TB of Clound Space
            </div>
          </div>
          <div className="flex flex-col justify-cennter items-center w-[135px] layout-548px:w-[300px] border-x">
            <div className="mb-[24px]">
              <SecureIcon />
            </div>
            <div className="text-gray-800 font-extrabold text-[12px] layout-548px:text-[16px]">
              100% Secure
            </div>
            <div className="text-slate-500 text-[10px] layout-548px:text-[16px]">
              Connection
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-[32px] layout-400px:mb-[64px]">
          <div className="w-[700px] pb-[64px] border-b">
            <h2 className="text-center font-extrabold text-sky-800 mb-[24px]">
              Get Access in Less than a Minute
            </h2>
            <div className="flex items-start flex-col layout-612px:flex-row layout-612px:justify-center layout-612px:items-center">
              <div className="w-full layout-612px:w-auto  justify-center mb-[16px] layout-612px:mb-0 flex layout-612px:justify-start items-center">
                <span className="text-[14px] layout-749px:text-[16px] w-[20px] h-[20px] layout-749px:w-[30px] layout-749px:h-[30px] bg-gray-300 text-gray-600 flex justify-center items-center rounded-full mr-[8px]">
                  1
                </span>
                <span className="text-gray-400 text-[14px] layout-749px:text-[16px]">
                  Create Account
                </span>
              </div>
              <div className="hidden layout-612px:block w-[40px] layout-749px:w-[80px] border mr-[16px] ml-[16px]"></div>
              <div className="relative left-[-2px] layout-612px:left-0 w-full layout-612px:w-auto  justify-center mb-[16px] layout-612px:mb-0 flex layout-612px:justify-start items-center">
                <span className="text-[14px] layout-749px:text-[16px] w-[20px] h-[20px] layout-749px:w-[30px] layout-749px:h-[30px] bg-gray-300 text-gray-600 flex justify-center items-center rounded-full mr-[8px]">
                  2
                </span>
                <span className="text-gray-400 text-[14px] layout-749px:text-[16px]">
                  Verify Account
                </span>
              </div>
              <div className="hidden layout-612px:block w-[40px] layout-749px:w-[80px] border mr-[16px] ml-[16px]"></div>
              <div className="relative left-[-2px] layout-612px:left-0  w-full layout-612px:w-auto  justify-center mb-[16px] layout-612px:mb-0 flex layout-612px:justify-start items-center">
                <span className="text-[14px] layout-749px:text-[16px] w-[20px] h-[20px] layout-749px:w-[30px] layout-749px:h-[30px] bg-gray-300 text-gray-600 flex justify-center items-center rounded-full mr-[8px]">
                  3
                </span>
                <span className="text-gray-400 text-[14px] layout-749px:text-[16px]">
                  Acess Granted
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col justify-center items-center mb-[32px] layout-400px:mb-[64px]">
          <div className="mb-[16px] flex justify-center items-center">
            <button
              onClick={onHandleOpenEmailStep}
              className="w-full layout-400px:w-[250px] bg-green-600 h-[60px] rounded-[4px] flex justify-center items-center pl-[32px] pr-[32px]"
            >
              <span className="text-white text-[20px] font-extrabold">
                Get Started Now
              </span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[8px] h-[8px] rounded-[8px] mr-[16px] bg-green-400"></div>
            <div className="text-[12px] text-slate-500">
              High Speed & Unlimited.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-[32px] layout-400px:mb-[112px]">
          <div>
            <div className="text-center text-[26px] text-sky-900 mb-[32px] layout-400px:mb-[64px]">
              Find out why people love
              <br />
              our website
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <div className="mr-[8px]">
                <SuccessIcon />
              </div>
              <div className="text-gray-400">
                Global Access: from anywhere and in any device
              </div>
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <div className="mr-[8px]">
                <SuccessIcon />
              </div>
              <div className="text-gray-400">
                Your own space in the cloud: 5TB of Clound Storage space
                included
              </div>
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <div className="mr-[8px]">
                <SuccessIcon />
              </div>
              <div className="text-gray-400">
                Unlimited Speed: no speed transfer limits
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-center mb-[100px]">
          Offer and Billing Terms: You can try our serivce for 5 days at 0.00
          Euro. If you not satistied or you do not want to keep your membership.
          Contact us to cancel. If you do not cancel, at the end of the 5 days
          trail period, the service will automatically continue on a monthly
          basis and thr service will automatically charge the credit card you
          have provided the application monthly 49.9 Euro fee stated at the
          beginning of each such period, for as long as you continue the
          service. You can celcel your membership at anytime
        </div>
      </div>
    </>
  );
}
