// @ts-nocheck
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
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
import { useNavigate, useLocation } from "react-router-dom";
import SideBarSection from "@/components/dashboard/sidebar";
import toast, { Toaster } from "react-hot-toast";

const EditReferral = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get data from navigation state
  const { referralData, index } = location.state || {};

  const [formData, setFormData] = useState({
    codeReferral: "",
    creationDate: null,
    description: "",
    validUntil: null,
    discountType: "",
    discountAmount: "",
    selectedPrograms: [], // Add program selection
  });

  // Available programs
  const programs = [
    { id: "bmc", name: "BMC", label: "BMC" },
    { id: "bcl", name: "BCL", label: "BCL" },
    { id: "ibcc", name: "IBCC", label: "IBCC" },
    { id: "ibpc", name: "IBPC", label: "IBPC" },
    { id: "chambers", name: "Chambers", label: "Chambers" },
    { id: "company_visit", name: "Company Visit", label: "Company Visit" },
    {
      id: "international_conference",
      name: "International Conference",
      label: "International Conference",
    },
  ];

  // Parse date string to Date object
  const parseDate = (dateString) => {
    if (!dateString) return null;

    try {
      // Handle different date formats
      if (dateString.includes("/")) {
        // Format: "05/08/2025" or "5/8/2025"
        const [day, month, year] = dateString.split("/");
        const date = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day)
        );
        return isNaN(date.getTime()) ? null : date;
      } else if (dateString.includes(" ")) {
        // Format: "5 Aug 2025"
        const monthNames = {
          Jan: 0,
          Feb: 1,
          Mar: 2,
          Apr: 3,
          May: 4,
          Jun: 5,
          Jul: 6,
          Aug: 7,
          Sep: 8,
          Oct: 9,
          Nov: 10,
          Dec: 11,
        };

        const parts = dateString.split(" ");
        if (parts.length === 3) {
          const day = parseInt(parts[0]);
          const month = monthNames[parts[1]];
          const year = parseInt(parts[2]);

          if (month !== undefined && !isNaN(day) && !isNaN(year)) {
            const date = new Date(year, month, day);
            return isNaN(date.getTime()) ? null : date;
          }
        }
      }

      // Fallback: try to parse as ISO date
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date;
    } catch (error) {
      console.error("Error parsing date:", dateString, error);
      return null;
    }
  };

  // Convert program names to IDs
  const convertProgramNamesToIds = (programNames) => {
    if (!Array.isArray(programNames)) return [];

    return programNames
      .map((programName) => {
        // First, try to find by exact name match
        const programByName = programs.find(
          (p) => p.name === programName || p.label === programName
        );
        if (programByName) return programByName.id;

        // If not found by name, try case-insensitive match
        const programByCaseInsensitive = programs.find(
          (p) =>
            p.name.toLowerCase() === programName.toLowerCase() ||
            p.label.toLowerCase() === programName.toLowerCase()
        );
        if (programByCaseInsensitive) return programByCaseInsensitive.id;

        // If still not found, try to match by converting name to potential ID
        const potentialId = programName.toLowerCase().replace(/\s+/g, "_");
        const programById = programs.find((p) => p.id === potentialId);
        if (programById) return programById.id;

        // If no match found, check if the value is already an ID
        const existingProgram = programs.find((p) => p.id === programName);
        if (existingProgram) return existingProgram.id;

        console.warn(`Program not found: ${programName}`);
        return null;
      })
      .filter(Boolean); // Remove null values
  };

  // Populate form with existing data when component mounts
  useEffect(() => {
    if (referralData) {
      const creationDate = parseDate(referralData.creationDate);
      const validUntil = parseDate(referralData.validUntil); // Debug log

      // Parse existing programs if available
      let existingPrograms = [];
      if (referralData.programs && Array.isArray(referralData.programs)) {
        existingPrograms = referralData.programs;
      } else if (
        referralData.selectedPrograms &&
        Array.isArray(referralData.selectedPrograms)
      ) {
        existingPrograms = referralData.selectedPrograms;
      }

      // Convert program names to IDs
      const programIds = convertProgramNamesToIds(existingPrograms);
      setFormData({
        codeReferral: referralData.code || "",
        creationDate: creationDate,
        description: referralData.description || "",
        validUntil: validUntil,
        discountType: referralData.discountAmount?.toString().includes("%")
          ? "percentage"
          : "fixed",
        discountAmount:
          referralData.discountAmount?.toString().replace(/[,%]/g, "") || "",
        selectedPrograms: programIds,
      });
      // ; // Debug log

      // // Parse existing programs if available
      // let existingPrograms = [];
      // if (referralData.programs && Array.isArray(referralData.programs)) {
      //   existingPrograms = referralData.programs;
      //   ;
      // } else if (referralData.selectedPrograms && Array.isArray(referralData.selectedPrograms)) {
      //   existingPrograms = referralData.selectedPrograms;
      //   ;
      // }

      // // Convert program names to IDs
      // const programIds = convertProgramNamesToIds(existingPrograms);
      // ;

      // setFormData({
      //   codeReferral: referralData.code || "",
      //   creationDate: creationDate,
      //   description: referralData.description || "",
      //   validUntil: validUntil,
      //   discountType: referralData.discountAmount?.toString().includes('%') ? 'percentage' : 'fixed',
      //   discountAmount: referralData.discountAmount?.toString().replace(/[,%]/g, '') || "",
      //   selectedPrograms: programIds,
      // });

      // setFormData({
      //   codeReferral: referralData.code || "",
      //   creationDate: creationDate,
      //   description: referralData.description || "",
      //   validUntil: validUntil,
      //   discountType: referralData.discountAmount?.toString().includes("%")
      //     ? "percentage"
      //     : "fixed",
      //   discountAmount:
      //     referralData.discountAmount?.toString().replace(/[,%]/g, "") || "",
      // });
    }
  }, [referralData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle discount amount as percentage
    if (name === "discountAmount") {
      // Remove any non-numeric characters except decimal point
      const numericValue = value.replace(/[^0-9.]/g, "");

      // Ensure only one decimal point
      const parts = numericValue.split(".");
      const formattedValue =
        parts.length > 2
          ? parts[0] + "." + parts.slice(1).join("")
          : numericValue;

      // Limit to 100% maximum
      const numValue = parseFloat(formattedValue);
      if (numValue > 100) {
        return; // Don't update if over 100%
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (date, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: date,
    }));
  };

  const handleProgramChange = (programId) => {
    setFormData((prev) => ({
      ...prev,
      selectedPrograms: prev.selectedPrograms.includes(programId)
        ? prev.selectedPrograms.filter((id) => id !== programId) // Remove if already selected
        : [...prev.selectedPrograms, programId], // Add if not selected
    }));
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleUpdate = () => {
    // Validation
    if (!formData.codeReferral.trim()) {
      alert("Please enter a referral code");
      return;
    }

    if (!formData.validUntil) {
      alert("Please select a valid until date");
      return;
    }

    if (!formData.discountAmount.trim()) {
      alert("Please enter a discount percentage");
      return;
    }

    // Validate discount amount is a valid number between 0 and 100
    const discountNum = parseFloat(formData.discountAmount);
    if (isNaN(discountNum) || discountNum <= 0 || discountNum > 100) {
      alert("Please enter a valid discount percentage between 1 and 100");
      return;
    }

    if (formData.selectedPrograms.length === 0) {
      alert("Please select at least one program");
      return;
    }

    // Format dates and get selected program names
    const selectedProgramNames = formData.selectedPrograms
      .map((id) => programs.find((program) => program.id === id)?.name)
      .filter(Boolean);

    const submitData = {
      ...formData,
      creationDate: formData.creationDate
        ? formatDate(formData.creationDate)
        : "",
      validUntil: formData.validUntil ? formatDate(formData.validUntil) : "",
      discountAmount: `${formData.discountAmount}%`, // Add % symbol for clarity
      selectedProgramNames, // Include program names for better readability
    };

    // Here you would typically call an API to update the referral code
    toast.succcess(
      `Referral code "${
        formData.codeReferral
      }" updated successfully!\nDiscount: ${
        formData.discountAmount
      }%\nPrograms: ${selectedProgramNames.join(", ")}`
    );
    navigate("/dashboard/referral");
  };

  const handleCancel = () => {
    // Confirm before leaving if form has changes
    const hasChanges =
      referralData &&
      (formData.codeReferral !== (referralData.code || "") ||
        formData.discountAmount !==
          (referralData.discountAmount?.toString().replace(/[,%]/g, "") ||
            "") ||
        JSON.stringify(formData.selectedPrograms.sort()) !==
          JSON.stringify(
            convertProgramNamesToIds(
              referralData.programs || referralData.selectedPrograms || []
            ).sort()
          ));

    if (hasChanges) {
      const confirmCancel = window.confirm(
        "Are you sure you want to cancel? All changes will be lost."
      );
      if (!confirmCancel) {
        return;
      }
    }

    // Navigate back to referral list without saving
    navigate("/dashboard/referral");
  };

  // Common input styling
  const inputStyle =
    "w-full h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900";

  // If no referral data is provided, show error message
  if (!referralData) {
    return (
      <div
        className="flex min-h-screen w-full p-4 sm:p-10 justify-center items-center"
        style={{
          background:
            "linear-gradient(180deg, #562780 0%, #643D87 48.08%, #8257A9 100%)",
        }}
      >
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h2 className="text-lg sm:text-xl font-bold text-red-600 mb-4">
            Error
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            No referral data found to edit.
          </p>
          <button
            onClick={() => navigate("/dashboard/referral")}
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm sm:text-base"
          >
            Back to Referral List
          </button>
        </div>
      </div>
    );
  }

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
        {/* Main content */}
        <div className="flex-1 p-2 sm:p-4">
          {/* Content dashboard disini */}
          <main className="flex-1 p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-auto">
            {/* Header Bar */}
            <header className="flex justify-between items-center mb-4 sm:mb-6">
              <h1 className="font-semibold text-lg sm:text-xl select-none"></h1>
              <div className="flex items-center space-x-4"></div>
            </header>

            {/* Dashboard Title */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
              <div className="space-y-1">
                <div className="text-[#B1B1B1] text-sm sm:text-base">
                  Referral Code {">"} Edit
                </div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  Edit Referral Code
                </h1>
              </div>
            </div>

            {/* Debug Info 
          {referralData && (
            <div className="bg-gray-800 text-white p-4 rounded-lg text-xs">
              <strong>Debug Info:</strong><br/>
              Original Programs: {JSON.stringify(referralData.programs || referralData.selectedPrograms)}<br/>
              Selected Program IDs: {JSON.stringify(formData.selectedPrograms)}<br/>
              Selected Program Names: {formData.selectedPrograms.map(id => programs.find(p => p.id === id)?.name).join(', ')}
            </div>
          )}*/}

            {/* Form Section */}
            <div className="bg-[#8257A9] rounded-lg p-4 sm:p-6 lg:p-8 w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Code Referral */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Code Referral
                  </label>
                  <input
                    type="text"
                    name="codeReferral"
                    value={formData.codeReferral}
                    onChange={handleInputChange}
                    placeholder="Enter Code Referral"
                    className={inputStyle}
                  />
                </div>

                {/* Creation Date */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Creation Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.creationDate}
                      onChange={(date) =>
                        handleDateChange(date, "creationDate")
                      }
                      dateFormat="dd/MM/yyyy"
                      className={inputStyle}
                      wrapperClassName="w-full"
                      calendarClassName="!bg-white !border-gray-300"
                      placeholderText="Select creation date"
                      showPopperArrow={false}
                      popperClassName="react-datepicker-popper"
                      popperPlacement="bottom-start"
                      isClearable={true}
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    className={inputStyle}
                  />
                </div>

                {/* Valid Until */}
                <div>
                  <label className="block text-[#FFFFFF] text-sm font-medium mb-2">
                    Valid Until
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.validUntil}
                      onChange={(date) => handleDateChange(date, "validUntil")}
                      dateFormat="dd/MM/yyyy"
                      className={inputStyle}
                      wrapperClassName="w-full"
                      calendarClassName="!bg-white !border-gray-300"
                      placeholderText="Select valid until date"
                      minDate={new Date()}
                      showPopperArrow={false}
                      popperClassName="react-datepicker-popper"
                      popperPlacement="bottom-start"
                      isClearable={true}
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  </div>
                </div>

                {/* Discount Type */}
                {/* <div>
                <label className="block text-[#FFFFFF] text-sm font-medium mb-2">Type Discount</label>
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
                    Discount Amount (%)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="discountAmount"
                      value={formData.discountAmount}
                      onChange={handleInputChange}
                      placeholder="Enter discount percentage (e.g., 10)"
                      className={inputStyle}
                      maxLength="5"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">%</span>
                    </div>
                  </div>
                  {formData.discountAmount && (
                    <div className="mt-1 text-xs text-gray-200">
                      Discount: {formData.discountAmount}%
                    </div>
                  )}
                </div>
              </div>

              {/* Programs Selection */}
              <div className="mt-4 sm:mt-6">
                <label className="block text-[#FFFFFF] text-sm font-medium mb-3 sm:mb-4">
                  Select Programs
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      className="flex items-center p-2 sm:p-0"
                    >
                      <input
                        type="checkbox"
                        id={program.id}
                        checked={formData.selectedPrograms.includes(program.id)}
                        onChange={() => handleProgramChange(program.id)}
                        className="h-4 w-4 text-orange-400 bg-white border-gray-300 rounded focus:ring-orange-400 focus:ring-2 flex-shrink-0"
                      />
                      <label
                        htmlFor={program.id}
                        className="ml-3 text-sm font-medium text-white cursor-pointer leading-tight"
                      >
                        {program.label}
                      </label>
                    </div>
                  ))}
                </div>
                {formData.selectedPrograms.length > 0 && (
                  <div className="mt-2 text-sm text-gray-200">
                    Selected: {formData.selectedPrograms.length} program(s)
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button
                  onClick={handleUpdate}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-medium transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Update
                </button>
                <button
                  onClick={handleCancel}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

// Icon button component
const IconButton = ({ name, icon }) => (
  <button
    type="button"
    aria-label={name}
    title={name}
    className="rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200 transition-colors"
  >
    {icon}
  </button>
);

export default EditReferral;
