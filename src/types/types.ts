export type User = {
  name: string;
  email: string;
  birthdate: string;
  domicile: string;
  institution: string;
  institution_name: string;
  studentID?: File | null;
  major: string;
  wa_number: string;
  line_id: string;
  insta_acc: string;
  status: number;
  Submission: { Files: { filePath: string }[] }[];
  educationStatus: "highschool" | "university";
  schoolName?: string;
  univName?: string;
  majorName?: string;
};

// Add Staff
export type Staff = {
  division: string;
  id: number;
  staffName: string;
  staffEmail: string;
  role: string;
};

// Activity
export type Activity = {
  id: number;
  activity: string;
  createdAt: string;
  staff: {
    createdAt: string;
    id: number;
    name: string;
    email: string;
    role: string;
    divisionId: number;
  };
  staffId: number;
  status: string;
};

export type Referral = {
  id: number;
  no: number;
  code: string;
  creationDate: string;
  validUntil: string;
  discountAmount: string | number;
  status: boolean;
};

export type Notification = {
  id: number;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  acceptedTypes: string;
  dueDate: string;
  hasOverdue: boolean;
  programId: number;
  stage: "REGISTRATION" | "PREELIM" | "SEMINAR" | "FINAL";
  type: "IDCARD" | "PAYMENT" | "TASK" | "PROMOTION";
};

export type TeamMember = {
  role: "MEMBER" | "LEADER";
  status: "incomplete" | "verifying" | "verified";
  user: {
    id: number;
    email: string;
    institution: "UNIV" | "HSC";
    name: string;
    status: number;
  };
};

export type TaskSubmission = {
  event: "IBCC" | "IBPC" | "BMC" | "BCL" | "CHAMBERS" | "COMPANYVISIT" | "IC";
  id: number;
  programId: number;
  seminarId: number | null;
  stage: "REGISTRATION" | "PREELIM" | "SEMINAR" | "FINAL";
  teamId: number;
  userId: number;
  type: "IDCARD" | "PAYMENT" | "TASK" | "PROMOTION";
};

export type Submission = {
  Files: {
    filePath: string;
  }[];
  submittedAt: string;
  type: "IDCARD" | "PAYMENT" | "TASK" | "PROMOTION";
};

export type TeamDataAdmin = {
  id: number;
  submissionTeam: Submission[];

  leader: string;
  memberCount: number;
  membersIdcard: {
    files: {
      filePath: string;
    }[];
    type: "IDCARD" | "PAYMENT" | "TASK" | "PROMOTION";
  }[];

  name: string;
  statusCode: number;
  teamMembers: User[];
};
