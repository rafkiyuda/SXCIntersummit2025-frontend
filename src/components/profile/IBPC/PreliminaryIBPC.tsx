import React, { useEffect, useState } from "react";
import SideBarSection from "@/components/profile/SideBarSection";
import Timeline from "./timelineIBPC";
import Announcement from "@/pages/user/Announcement";
import IBPCTeamStatus from "./IBPCTeamStatus";
import { isOverdue } from "@/utils/utils";
import {
  useGetIBPCTeamDetails,
  useGetIBPCteamMembers,
} from "@/hooks/User/useHandleIBPC";
import { useCreateSubmission } from "@/hooks/feature/useSubmission";
import useGetUserData from "@/hooks/User/useGetUserData";
import useGetSubmission from "@/hooks/feature/useGetSubmission";
import type { Task, TaskSubmission } from "@/types/types";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";
// Icons for download and upload buttons
const Download = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Upload = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

function PreliminaryIBPC() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Proof of Promotion",
      dueDate: "2025-10-16, 23.59 PM",
      programId: 2,
      stage: "PREELIM",
      type: "PROMOTION",
      description: "",
      acceptedTypes: "ZIP",
      hasOverdue: false,
    },
    {
      id: 2,
      title: "BMC Submission",
      dueDate: "2025-10-16, 23.59 PM",
      programId: 2,
      stage: "PREELIM",
      type: "TASK",
      description:
        "For further information, please check your email for the given task.",
      acceptedTypes: "PDF",
      hasOverdue: true,
    },
  ];

  // Fetch API
  const userData = useGetUserData();
  const submissions = useGetSubmission({ event: "IBPC" });
  const { data: teamMembersData } = useGetIBPCteamMembers();
  const { data: teamDetails } = useGetIBPCTeamDetails();

  const { createSubmission, isLoading } = useCreateSubmission();

  // State for popup
  const [showDetails, setShowDetails] = useState(false);

  const [loadingTaskId, setLoadingTaskId] = useState<number | null>(null);
  const [teamSubmissions, setTeamSubmissions] = useState<
    TaskSubmission[] | null
  >(null);
  useEffect(() => {
    if (submissions.data && userData.data) {
      const teamSubmissions = submissions.data.filter(
        (sub: TaskSubmission) => sub.teamId === teamDetails?.id
      );
      setTeamSubmissions(teamSubmissions);
    }
  }, [userData.data, submissions.data, teamDetails]);

  return (
    <>
      <Toaster />

      <div className="w-full  mx-auto md:p-5 space-y-4 md:space-y-6 mt-4 md:mt-15 z-30 md:min-h-[130vh]">
        <div className="flex flex-col md:flex-row md:mr-5">
          {/* Main Content */}
          <div className="flex-1 overflow-auto md:px-20 md:py-6 ">
            <h2
              className="text-2xl md:text-5xl font-extrabold mb-2 flex bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
              style={{
                WebkitTextStroke: "1.5px white",
                textShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              International Business Plan Competition
            </h2>
            <Timeline />
            <IBPCTeamStatus />
            <Announcement announcementLink={"/users/ibpc/announcement"} />

            {/* Tasks Section */}
            <h2 className="text-white text-xl font-semibold mt-4">Tasks</h2>
            {teamDetails?.status === 15 && (
              <p className="text-red-500 mb-2">
                Complete your team members before submitting.
              </p>
            )}
            <div className="space-y-4">
              {tasks.map((task, index) => {
                const overdue = isOverdue(task.dueDate);

                const isSubmitted = teamSubmissions?.some(
                  (s) => s.type === task.type && s.stage === task.stage
                );

                // map acceptedTypes -> input accept attribute
                const getAcceptedMime = (types: string) => {
                  return types
                    .split(",")
                    .map((t) => {
                      const trimmed = t.trim().toLowerCase();
                      if (trimmed === "jpg" || trimmed === "jpeg")
                        return ".jpg,.jpeg";
                      if (trimmed === "png") return ".png";
                      if (trimmed === "pdf") return ".pdf";
                      if (trimmed === "zip") return ".zip";
                      return "";
                    })
                    .join(",");
                };

                const handleSubmit = (
                  e: React.ChangeEvent<HTMLInputElement>,
                  taskId: number
                ) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  // Example: validate file type
                  if (
                    !getAcceptedMime(task.acceptedTypes).includes(
                      file.name.split(".").pop()?.toLowerCase() || ""
                    )
                  ) {
                    toast.error("Invalid file type!");
                    return;
                  }

                  const formData = new FormData();
                  formData.append("file", file);

                  try {
                    setLoadingTaskId(task.id);
                    createSubmission({
                      programId: task.programId,
                      stage: task.stage,
                      type: task.type,
                      data: formData,
                    });
                  } finally {
                    setLoadingTaskId(null);
                  }
                };

                return (
                  <div
                    key={index}
                    className="p-6 bg-[#8257A9] mt-2 rounded-lg border border-white/20"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="text-[20px] font-semibold text-white">
                        {task.title}
                      </h3>
                      <p className="text-sm text-white/70 ml-auto">
                        {task.dueDate}
                      </p>
                    </div>

                    <p className="text-white/80 text-[13px] mb-2">
                      {task.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                      <div className="space-y-2">
                        <p className="text-[13px] text-white/70">
                          Accepted File Types:
                        </p>
                        <p className="text-[13px] text-white">
                          {task.acceptedTypes}
                        </p>
                        <div className="flex items-center text-[10px] space-x-3">
                          <p>Status: </p>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] ${
                              isSubmitted ? "bg-[#99E857]" : "bg-yellow-500"
                            } text-white`}
                          >
                            {teamSubmissions?.some(
                              (s) =>
                                s.type === task.type && s.stage === task.stage
                            )
                              ? "Submitted"
                              : "Not Submitted"}
                          </span>
                          {overdue && (
                            <span className="inline-flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-[10px]">
                              <span className="ml-1">Overdue</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        {task.title === "Proof of Promotion" && (
                          <button
                            className="inline-flex items-center px-4 py-2 rounded-md text-[15px] font-semibold bg-[#b6e857] text-[#42582b] hover:bg-[#d6ffb6] transition-all duration-300 mb-2"
                            onClick={() => setShowDetails(true)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="mr-2"
                            >
                              <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="3"
                                fill="#b6e857"
                              />
                              <path
                                d="M8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"
                                fill="#42582b"
                              />
                            </svg>
                            View Details
                          </button>
                        )}
                        <label
                          className={`inline-flex items-center px-3 py-1 rounded-md text-xs cursor-pointer ${
                            overdue || teamDetails?.status === 15
                              ? "bg-gray-400 cursor-not-allowed opacity-50"
                              : "bg-[#5EC7ED] hover:bg-blue-600 text-white"
                          }`}
                        >
                          <Upload />
                          <span className="ml-2">
                            {/* {isLoading ? <LoadingSpinner /> : "Submit Here"} */}
                            {loadingTaskId === task.id ? (
                              <LoadingSpinner />
                            ) : isSubmitted ? (
                              "Update Submission"
                            ) : (
                              "Submit Here"
                            )}
                          </span>
                          <input
                            type="file"
                            accept={getAcceptedMime(task.acceptedTypes)}
                            className="hidden"
                            disabled={overdue || teamDetails?.status === 15}
                            onChange={(e) => handleSubmit(e, task.id)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pop Up Modal */}
        {showDetails && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2"
            onClick={() => setShowDetails(false)}
          >
            <div
              className="bg-white rounded-2xl w-full max-w-md p-4 md:p-6 relative shadow-xl overflow-y-auto max-h-[90vh] mx-2 sm:mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setShowDetails(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Pop Up Content */}
              <div className="flex flex-col items-center">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#330084] mb-2 text-center leading-tight">
                  Proof of Promotion – Submission Guidelines
                </h2>
                <div className="text-left text-xs sm:text-sm md:text-sm text-[#330084] mb-4 w-full">
                  <p className="font-semibold mb-2">
                    To complete your Proof of Promotion task, please make sure
                    to include the following:
                  </p>
                  <ol className="list-decimal ml-5 mb-2 space-y-1">
                    <li>
                      Proof of Twibbon posted in personal active instagram and
                      tagged @sxcintersummit & @sxcintersummitcompetition:{" "}
                      <a
                        href="https://bit.ly/IntersummitIBPC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#330084] font-bold"
                      >
                        bit.ly/IntersummitIBPC
                      </a>
                    </li>
                    <li>
                      Proof of reposting the IBPC Open Registration post on your
                      Instagram Story
                    </li>
                    <li>
                      Proof of following Instagram accounts:
                      <ul className="list-disc ml-5">
                        <li>@sxcintersummit</li>
                        <li>@sxcintersummitcompetition</li>
                      </ul>
                    </li>
                    <li>
                      Proof of tagging 5 friends in the comment section of the
                      IBPC Open Registration post
                    </li>
                  </ol>
                  <p className="font-bold mt-4 mb-1 text-[#d97706]">
                    📌 Important Notes:
                  </p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>
                      All team members are required to complete this task.
                    </li>
                    <li>
                      File format for each proof:{" "}
                      <span className="font-mono font-bold">
                        MemberName_PromotionProofIBPC
                      </span>
                    </li>
                    <li>
                      Combine all files into a single .zip folder with the
                      format:{" "}
                      <span className="font-mono font-bold">
                        TeamName_ProofOfPromotionIBPC
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PreliminaryIBPC;
