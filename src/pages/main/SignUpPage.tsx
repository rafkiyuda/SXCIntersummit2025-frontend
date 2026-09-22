import VerifyOTP from "@/components/others/VerifyOTP";
import BackButton from "@/components/ui/BackButton";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import useAuth from "@/hooks/Guest/useAuth";
import { registerschema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import type { z } from "zod";

export type FormFields = z.infer<typeof registerschema>;
export const SignupPage = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(registerschema),
  });

  const handleFillDummy = () => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    setValue("name", "Dummy User");
    setValue("email", `dummy_${randomId}@example.com`);
    setValue("pass", "Password123!");
    setValue("pass2", "Password123!");
  };
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState<string>("");

  const [resetStep, setResetStep] = useState<"register" | "verify">("register");

  const { registerAccount, registerLoading } = useAuth();
  const handleRegister: SubmitHandler<FormFields> = async (data) => {
    const res = await registerAccount({
      name: data.name,
      email: data.email,
      password: data.pass,
      referalCode: data.referralCode || "",
      remember: false,
    });

    if (res === 201) {
      setRegisterEmail(data.email);
      setResetStep("verify");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleTermsClick = () => {};

  return (
    <>
      <Toaster />

      <div className="min-h-screen bg-black flex flex-col items-center w-full    sm:p-0">
        {/* Main Container */}
        <div className="relative w-full flex justify-around  items-center  min-h-[800px] sm:min-h-screen bg-white overflow-hidden rounded-lg sm:rounded-none max-md:justify-center max-md:min-h-screen">
          {/* Background Image */}
          <img
            className="absolute w-full h-full object-cover"
            alt="Background"
            src="/images/pexels-tanishka-357202-973226-1.png"
          />

          {/* Back Button */}
          <BackButton />

          {/* Gray Overlay (Left Half) */}
          <div className="absolute w-full md:w-1/2 left-0 h-full bg-[#d9d9d9]" />

          {/* Gradient Overlay */}
          <div className="absolute w-full h-full bg-gradient-to-b from-[#c4ef7b] via-[#79ccea] to-[#8257a9] opacity-[0.77]" />

          {/* Decorative Group Image */}
          <img
            className="hidden md:block absolute bottom-[75%] right-0 w-[100px] lg:w-[177px] h-auto lg:h-[259px] mix-blend-overlay"
            alt="Decoration"
            src="/images/group-1000002333.png"
          />

          {/* Center Line */}
          <img
            className="absolute top-[50px] sm:top-[63px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1247px] h-[2px] sm:h-[3px]"
            alt="Divider"
            src="/images/line-1.svg"
          />

          {/* Logo */}
          <img
            className=" md:translate-x-0 w-[300px] sm:w-[500px] max-md:hidden"
            alt="Logo"
            src="/images/logo-intersummit-3.png"
          />

          {/* "Speak Ideas, Spark" and "Movement" Text */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Speak </span>
              <span className="bg-gradient-to-r from-[#C4EF7B] to-[#79CCEA] bg-clip-text text-transparent">
                Ideas
              </span>
              <span className="text-white">, Spark</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold mt-1">
              <span className="bg-gradient-to-r from-[#C4EF7B] to-[#79CCEA] bg-clip-text text-transparent">
                Movement
              </span>
            </div>
          </div>

          {/* Registration Form */}
          {resetStep === "register" ? (
            <div className="w-full max-w-[95vw] sm:max-w-[400px] lg:max-w-[456px] mr-10 max-md:mr-0 ">
              <div className="relative text bg-opacity-20 backdrop-blur-sm rounded-xl p-6 sm:p-8 ">
                <form onSubmit={handleSubmit(handleRegister)}>
                  {/* Login/Register Tabs */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="flex items-center">
                      <Link
                        to="/login"
                        className="text-[#737186] text-2xl sm:text-[29.4px] font-bold hover:opacity-80 transition-opacity"
                      >
                        Login
                      </Link>
                      <span className="text-[24px] sm:text-[29.4px] font-bold leading-[41.2px] ml-4 cursor-pointer bg-clip-text text-transparent bg-gradient-to-b from-[#562780] to-[#8257a9] underline decoration-[#8257a9] decoration-1 underline-offset-10">
                        Register
                      </span>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-2 sm:space-y-3">
                    {/* Name Field */}
                    <div>
                      <label className="block text-white text-sm sm:text-[14.1px] font-bold mb-1">
                        Name <span className="text-[#ff0000]">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="Enter your full name"
                        className="w-full h-[42px] text-black bg-[#f2f2f2] rounded-[10px] border-[0.5px] border-[#aeaeae] px-4 py-2 text-sm focus:outline-none focus:border-[#8257a9]"
                        required
                      />
                      <p
                        className={`${
                          errors.name ? "text-red-600" : "text-transparent"
                        }`}
                      >
                        {errors.name?.message || "a"}
                      </p>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-white text-sm sm:text-[14.1px] font-bold mb-1">
                        Email Address <span className="text-[#ff0000]">*</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email address"
                        className="w-full h-[42px] text-black bg-[#f2f2f2] rounded-[10px] border-[0.5px] border-[#aeaeae] px-4 py-2 text-sm focus:outline-none focus:border-[#8257a9]"
                        required
                      />

                      <p
                        className={`${
                          errors.email ? "text-red-600" : "text-transparent"
                        }`}
                      >
                        {errors.email?.message || "a"}
                      </p>
                    </div>

                    {/* Password Field */}
                    <div>
                      <label className="block text-white text-sm sm:text-[14.1px] font-bold mb-1">
                        Password <span className="text-[#ff0000]">*</span>
                      </label>
                      <input
                        type="password"
                        {...register("pass")}
                        placeholder="Create your password"
                        className="w-full h-[42px] text-black bg-[#f2f2f2] rounded-[10px] border-[0.5px] border-[#aeaeae] px-4 py-2 text-sm focus:outline-none focus:border-[#8257a9]"
                        required
                      />
                      <p
                        className={`${
                          errors.pass ? "text-red-600" : "text-transparent"
                        }`}
                      >
                        {errors.pass?.message || "a"}
                      </p>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                      <label className="block text-white text-sm sm:text-[14.1px] font-bold mb-1">
                        Confirm Password{" "}
                        <span className="text-[#ff0000]">*</span>
                      </label>
                      <input
                        type="password"
                        {...register("pass2")}
                        placeholder="Confirm your password"
                        className="w-full h-[42px] text-black bg-[#f2f2f2] rounded-[10px] border-[0.5px] border-[#aeaeae] px-4 py-2 text-sm focus:outline-none focus:border-[#8257a9]"
                        required
                      />
                      <p
                        className={`${
                          errors.pass2 ? "text-red-600" : "text-transparent"
                        }`}
                      >
                        {errors.pass2?.message || "a"}
                      </p>
                    </div>

                    {/* Referral Code Field */}
                    {/* <div>
                      <label className="block text-white text-sm sm:text-[14.1px] font-bold mb-1">
                        Referral Code (optional)
                      </label>
                      <input
                        type="text"
                        {...register("referralCode")}
                        placeholder="Enter your referral code"
                        className="w-full h-[42px] text-black bg-[#f2f2f2] rounded-[10px] border-[0.5px] border-[#aeaeae] px-4 py-2 text-sm focus:outline-none focus:border-[#8257a9]"
                      />
                      <p
                        className={`${
                          errors.referralCode
                            ? "text-red-600"
                            : "text-transparent"
                        }`}
                      >
                        {errors.referralCode?.message || "a"}
                      </p>
                    </div> */}
                  </div>

                  {/* Terms Checkbox */}
                  {/* <div className="mt-4 flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mr-2"
                    />
                    <label htmlFor="terms" className="text-white text-xs">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={handleTermsClick}
                        className="text-blue-800 underline hover:opacity-80"
                      >
                        Terms & Conditions
                      </button>
                    </label>
                  </div> */}

                  {/* Quick Fill Dummy Data Button */}
                  <button
                    type="button"
                    onClick={handleFillDummy}
                    className="w-full h-10 mt-5 cursor-pointer rounded-[10px] bg-white/20 hover:bg-white/30 text-white font-bold text-xs border border-white/40 transition-all flex justify-center items-center gap-1 shadow-sm"
                  >
                    <span>⚡</span> Fill Dummy Registration Data
                  </button>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-12 mt-3 cursor-pointer rounded-[10px] bg-gradient-to-b from-[#562780] to-[#8257a9] text-white font-bold hover:opacity-90 transition-opacity flex justify-center items-center shadow"
                  >
                    {" "}
                    {registerLoading ? <LoadingSpinner /> : "Register Account"}
                  </button>

                  {/* Login Link */}
                  <p className="mt-4 text-white text-xs text-center">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={handleLoginClick}
                      className="text-blue-800 cursor-pointer underline hover:opacity-80"
                    >
                      Login Now!
                    </button>
                  </p>
                </form>
              </div>
            </div>
          ) : (
            <VerifyOTP
              email={registerEmail}
              onCancel={() => setResetStep("register")}
              onSuccess={() => navigate("/login")}
            />
          )}
        </div>
      </div>
    </>
  );
};
