// @ts-nocheck

import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // npm install react-datepicker
import {
  Home,
  Users,
  Activity,
  Settings,
  Gift,
  Edit,
  Trash2,
  DollarSign,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SideBarSection from "@/components/dashboard/sidebar";
import { AddReferralSchema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler, control } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import type { z } from "zod";
import { useCreateReferral } from "@/hooks/Admin/useHandleAdminIT";
import LoadingSpinner from "../ui/LoadingSpinner";
type AddReferralForm = z.infer<typeof AddReferralSchema>;

const AddReferral = () => {
  const [formData, setFormData] = useState({
    codeReferral: "",
    creationDate: null, // Change to null for Date objects
    description: "",
    validUntil: null, // Change to null for Date objects
    discountType: "",
    discountAmount: "",
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<AddReferralForm>({
    resolver: zodResolver(AddReferralSchema),
    defaultValues: {
      code: "",
      creation: undefined,
      desc: "",
      validUntil: undefined,
      amount: 0,
    },
  });

  const { createReferral, isLoading } = useCreateReferral();

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleCreate: SubmitHandler<AddReferralForm> = async (data) => {
    await createReferral({
      code: data.code,
      discount: data.amount,
      validUntil: data.validUntil,
    });
    navigate("/dashboard/referral");
  };

  const handleCancel = () => {
    navigate("/dashboard/referral");
  };

  // Common input styling
  const inputStyle =
    "w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900";

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen w-full p-10">
        {/* Panggil sidebar */}
        <div className="w-1/4 ml-7">
          <SideBarSection />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 mt-3 overflow-auto">
          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Header Bar */}
            <header className="flex justify-between items-center mb-6">
              <h1 className="font-semibold text-xl select-none"></h1>
              <div className="flex items-center space-x-4">
                <IconButton
                  name="Settings"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 6.75l1.5 0m-1.5 0a3 3 0 012.27 1.18M11.25 6.75H9m4.5 0l1.5 0"
                      />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  }
                />
                <IconButton
                  name="Notifications"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="#ff4d4d"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.563-1.453L18 14m-6-9v3m0 0v3m0-3a6 6 0 100 12 6 6 0 000-12z"
                      />
                    </svg>
                  }
                />
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </header>

            {/* Dashboard Title */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="space-y-1">
                <div className="text-[#B1B1B1]">Referral Code {">"} Create</div>
                <h1 className="text-xl lg:text-2xl font-bold text-white">
                  Create Referral Code
                </h1>
              </div>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit(handleCreate)}
              className="bg-[#8257A9] rounded-lg p-8 max-w-4xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Code Referral */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Code Referral
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Code Referral"
                    className={inputStyle}
                    {...register("code")}
                  />
                  {errors.code && (
                    <p className="text-red-200 text-sm">
                      {errors.code.message}
                    </p>
                  )}
                </div>

                {/* Creation Date */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Creation Date
                  </label>
                  <div className=" relative">
                    <input
                      type="date"
                      className="w-full bg-white min-h-full border-gray-300 text-black"
                      {...register("creation")}
                    />
                    {errors.creation && (
                      <p className="text-red-200 text-sm">
                        {errors.creation.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    className={inputStyle}
                    {...register("desc")}
                  />
                  {errors.desc && (
                    <p className="text-red-200 text-sm">
                      {errors.desc.message}
                    </p>
                  )}
                </div>

                {/* Valid Until */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Valid Until
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full bg-white h-full border-gray-300 text-black"
                      value={
                        typeof watch === "function"
                          ? watch("validUntil") || ""
                          : ""
                      }
                      {...register("validUntil")}
                    />
                    {errors.validUntil && (
                      <p className="text-red-200 text-sm">
                        {errors.validUntil.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Discount Type */}
                {/* <div>
                <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                  Type Discount
                </label>
                <select
                  name="discountType"
                  value={formData.discountType}
                  onChange={handleInputChange}
                  className={inputStyle}
                >
                  <option value="">Select option</option>
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div> */}

                {/* Discount Amount */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Discount Amount
                  </label>
                  <input
                    type="number"
                    placeholder="Enter discount amount"
                    className={inputStyle}
                    {...register("amount", {
                      valueAsNumber: true,
                    })}
                  />
                  {errors.amount && (
                    <p className="text-red-200 text-sm">
                      {errors.amount.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  type="submit"
                  className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-medium transition-colors"
                >
                  {isLoading ? <LoadingSpinner /> : "Create"}
                </button>
                <button
                  onClick={() => handleCancel()}
                  type="button"
                  className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                >
                  {isLoading ? <LoadingSpinner /> : "Cancel"}
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

// Icon button component
const IconButton = ({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) => (
  <button
    type="button"
    aria-label={name}
    title={name}
    className="rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200 transition-colors"
  >
    {icon}
  </button>
);

export default AddReferral;
