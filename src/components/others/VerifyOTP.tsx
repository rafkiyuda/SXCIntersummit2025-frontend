import useAuth from "@/hooks/Guest/useAuth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";

type VerifyOTPProps = {
  onSuccess: () => void;
  onCancel: () => void;
  email: string;
};

const VerifyOTP = ({ onSuccess, onCancel, email }: VerifyOTPProps) => {
  const { requestNewOTP, requestNewOTPLoading, verifyOTP, verifyOTPLoading } =
    useAuth();
  const [resetCode, setResetCode] = useState<string>("");
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    if (secondsLeft === 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    try {
      const res = await verifyOTP({ email: email, otp: resetCode });
      if (res.status === 200) {
        // toast.success("OTP verified successfully");
        onSuccess();
      }
    } catch (e) {
      toast.error("Error verifying OTP:");
      // Handle error appropriately, e.g., show a toast notification
    }
  };

  return (
    <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg">
      <div className="flex justify-start mb-4">
        <button
          type="button"
          className="w-10 h-10 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
          onClick={onCancel}
        >
          <img
            className="w-6 h-[15px]"
            alt="Back icon"
            src="/images/back-icon.svg" // Make sure this path is correct
          />
        </button>
      </div>
      <form
        onSubmit={(e) =>
          handleVerifyCode(e as React.FormEvent<HTMLFormElement>)
        }
      >
        {/* Header Section - Centered */}
        <div className="mb-6 text-center">
          <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#8257a9] text-[32px] tracking-[-0.35px]">
            Enter Verification Code
          </h1>
          <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px]">
            We sent a verification code to your email
            <span className="font-bold"></span>
          </p>
        </div>

        {/* Verification Code Input - Consistent with Email Form */}
        <div className="flex flex-col items-center mb-6 w-full">
          <div className="w-[343px] text-left flex justify-between items-center mb-2">
            <label
              htmlFor="code-input"
              className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px] mb-1"
            >
              Verification Code <span className="text-red-600">*</span>
            </label>

            <span className="text-sm text-gray-500">
              <span>{secondsLeft}s</span>
            </span>
          </div>
          <div className="flex w-[343px] items-center justify-start gap-[15px] px-5 py-4 rounded-2xl border-[1.5px] border-solid border-[#8257a9] focus-within:ring-2 focus-within:ring-[#8257a9]text-left">
            <input
              id="code-input"
              type="text"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              placeholder="Enter 6-digit code"
              className="w-full [font-family:'Inter-Regular',Helvetica] text-black text-base tracking-[-0.18px] bg-transparent border-none outline-none placeholder:text-[#c7c7c7] placeholder:italic"
              required
            />
          </div>

          {/* Dev Bypass OTP Button */}
          <button
            type="button"
            onClick={() => setResetCode("123456")}
            className="mt-2 py-1.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg border border-emerald-300 transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
          >
            <span>⚡</span> Gunakan Kode Bypass: <strong>123456</strong>
          </button>

          <p className="text-start mt-2">
            Didn't receive the code?{" "}
            <button
              type="button"
              className={`text-[#8257a9] underline ${
                secondsLeft > 0
                  ? "cursor-not-allowed opacity-80"
                  : "cursor-pointer"
              }`}
              disabled={secondsLeft > 0}
              onClick={async () => {
                const res = await requestNewOTP(email);

                if (res.status === 200) {
                  setSecondsLeft(60);
                  setResetCode("");
                }
              }}
            >
              Resend
            </button>
          </p>
        </div>

        {/* Buttons - Consistent with Email Form */}
        <div className="flex flex-col items-center gap-4 w-full">
          <button
            // onClick={() => handleVerifyCode()}
            type="submit"
            className="cursor-pointer flex w-[343px] justify-center py-4 bg-[#8257a9] rounded-2xl hover:bg-[#6d4a8f] transition-colors duration-200"
          >
            <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[-0.18px]">
              {verifyOTPLoading || requestNewOTPLoading ? (
                <LoadingSpinner />
              ) : (
                "Verify Code"
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyOTP;
