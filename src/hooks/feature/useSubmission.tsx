// hooks/useSubmission.ts
import { API } from "@/services/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// ==============================
// CREATE SUBMISSION
// ==============================
export const useCreateSubmission = () => {
  const queryClient = useQueryClient();

  const createSubmissionData = useMutation({
    mutationFn: async ({
      programId,
      stage,
      type,
      data,
    }: {
      programId: string | number | null;
      stage: "REGISTRATION" | "PREELIM" | "SEMINAR" | "FINAL";
      type: "IDCARD" | "PAYMENT" | "TASK" | "PROMOTION" | "CV";
      data: FormData | any;
    }) => {
      const res = await API.post(
        `/submission/${programId}/${stage}/${type}`,
        data
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
      toast.success("Submission uploaded successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to upload submission");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    createSubmission: createSubmissionData.mutateAsync,
    isLoading: createSubmissionData.isPending,
  };
};

// ==============================
// GET SUBMISSIONS (OPTIONAL - if you have GET endpoint)
// ==============================
export const useGetSubmissions = (
  programId: string | number,
  stage: string,
  type: string
) => {
  return useQuery({
    queryKey: ["submissions", programId, stage, type],
    queryFn: async () => {
      const res = await API.get(`/submission/${programId}/${stage}/${type}`);
      return res.data;
    },
    enabled: !!programId && !!stage && !!type,
  });
};
