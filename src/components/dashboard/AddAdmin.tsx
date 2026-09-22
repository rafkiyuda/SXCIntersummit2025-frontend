import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import SideBarSection from "@/components/dashboard/sidebar";
import { useCreateStaff, useGetAllStaff } from "@/hooks/Admin/useHandleAdminIT";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AddAdminSchema } from "@/types/schema";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Toaster } from "react-hot-toast";
type AddAdminForm = z.infer<typeof AddAdminSchema>;

const AddAdmin = () => {
  const navigate = useNavigate(); // Use navigate to redirect
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddAdminForm>({
    resolver: zodResolver(AddAdminSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "", // force user to choose
      divisionId: "", // force user to choose
    },
  });
  const { createStaff, isLoading } = useCreateStaff();
  const onSubmit: SubmitHandler<AddAdminForm> = async (data: AddAdminForm) => {
    await createStaff(data);
    reset();
    navigate("/dashboard/admins");
  };

  return (
    <>
      <Toaster />
      <div
        className="flex min-h-screen w-full p-10"
        style={{
          background:
            "linear-gradient(180deg, #562780 0%, #643D87 48.08%, #8257A9 100%)",
        }}
      >
        {/* Sidebar */}
        <div className="w-1/4 ml-7">
          <SideBarSection />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5 mt-3 overflow-auto">
          {/* Main Content */}
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
                <h1 className="text-xl lg:text-2xl font-bold text-white cursor-pointer">
                  Add Admin
                </h1>
              </div>
            </div>

            {/* Admin Section */}
            <div className="space-y-6">
              {/* Tab Navigation */}
              <div className="border-b border-purple-600/20">
                <div className="flex space-x-8">
                  <Link
                    to="/dashboard/admins"
                    className="pb-3 px-1 border-b-2 border-transparent text-purple-200 hover:text-white hover:border-purple-300 transition-colors"
                  >
                    Admin
                  </Link>
                  <button className="pb-3 px-1 border-b-2 border-white text-white font-medium">
                    Add Admin
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="bg-[#8257A9] backdrop-blur-sm rounded-lg border border-purple-600/20 p-8">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*Admin Name */}
                    <div className="space-y-2">
                      <label className="text-white font-medium">
                        Admin Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter staff name"
                        className="bg-[#FFFFFF] border-purple-600/30 text-black placeholder-[#718EBF] focus:border-purple-400 p-2 rounded-md w-full"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-red-200 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Role Admin */}
                    <div className="space-y-2">
                      <label className="text-white font-medium">
                        Role Admin
                      </label>
                      <select
                        className="bg-[#FFFFFF] border-purple-600/30 text-black focus:border-purple-400 p-2 rounded-md w-full"
                        {...register("role")}
                      >
                        <option value="" disabled>
                          Select role
                        </option>
                        <option value="ADMIN">Super Admin</option>
                        <option value="BMC_ADMIN">Admin BMC</option>
                        <option value="BCL_ADMIN">Admin BCL</option>
                        <option value="IBCC_ADMIN">Admin IBCC</option>
                        <option value="IBPC_ADMIN">Admin IBPC</option>
                        <option value="CHAMBERS_ADMIN">Admin Chambers</option>
                        <option value="COMPANY_VISIT_ADMIN">
                          Admin Company Visit
                        </option>
                        <option value="IC_ADMIN">
                          Admin International Conference
                        </option>
                        <option value="PO">Admin PO</option>
                      </select>
                      {errors.role && (
                        <p className="text-red-200 text-sm">
                          {errors.role.message}
                        </p>
                      )}
                    </div>

                    {/* Admin Email */}
                    <div className="space-y-2">
                      <label className="text-white font-medium">
                        Admin Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter admin email"
                        className="bg-[#FFFFFF] border-purple-600/30 text-black placeholder-[#718EBF] focus:border-purple-400 p-2 rounded-md w-full"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-200 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Division Admin */}
                    <div className="space-y-2">
                      <label className="text-white font-medium">
                        Admin Division
                      </label>
                      <select
                        className="bg-[#FFFFFF] border-purple-600/30 text-black focus:border-purple-400 p-2 rounded-md w-full"
                        {...register("divisionId")}
                      >
                        <option value="" disabled selected>
                          Select division
                        </option>
                        <option value="PO">Project Officer</option>
                        <option value="IT">IT</option>
                        <option value="BMC">BMC</option>
                        <option value="BCL">BCL</option>
                        <option value="IBCC">IBCC</option>
                        <option value="IBPC">IBPC</option>
                        <option value="CHAMBERS">Chambers</option>
                        <option value="COMPANYVISIT">Company Visit</option>
                        <option value="IC">International Conference</option>
                      </select>
                      {errors.divisionId && (
                        <p className="text-red-200 text-sm">
                          {errors.divisionId.message}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="text-white font-medium">Password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="bg-[#FFFFFF] border-purple-600/30 text-black placeholder-[#718EBF] focus:border-purple-400 p-2 rounded-md w-full"
                        {...register("password")}
                      />
                      {errors.password && (
                        <p className="text-red-200 text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-8 py-2 rounded-lg"
                    >
                      {isLoading ? <LoadingSpinner /> : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
  icon: React.ReactElement;
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

export default AddAdmin;
