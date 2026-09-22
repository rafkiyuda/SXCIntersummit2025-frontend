type userData = {
  name: string;
  email: string;
  birthDate: Date;
  domicile: string;
  grade: string;
  schoolName: string;
  year: string;
  major?: string;
  studentID: File;
  whatsappNumber: string;
  lineID: string;
  insta: string;
};

type UpdateProfile = {
  columnName: string;
  schemaName: string;
  placeHolder: string;
  type: string;
  options?: { label: string; value: string }[];
};

export const updateSMAStudentData: UpdateProfile[] = [
  {
    columnName: "Name",
    schemaName: "name",
    placeHolder: "Enter your name...",
    type: "text",
  },
  {
    columnName: "Email",
    schemaName: "email",
    placeHolder: "Enter your email...",
    type: "email",
  },
  {
    columnName: "Birth Date",
    schemaName: "birthdate",
    placeHolder: "Select your birth date...",
    type: "date",
  },
  {
    columnName: "Domicile",
    schemaName: "domicile",
    placeHolder: "Enter your domicile...",
    type: "domicile",
  },
  {
    columnName: "Student ID",
    schemaName: "studentID",
    placeHolder: "Upload your student ID...",
    type: "file",
  },
  {
    columnName: "WhatsApp Number",
    schemaName: "wa_number",
    placeHolder: "Enter your WhatsApp number...",
    type: "text",
  },
  {
    columnName: "Line ID",
    schemaName: "line_id",
    placeHolder: "Enter your Line ID...",
    type: "text",
  },
  {
    columnName: "Instagram",
    schemaName: "insta_acc",
    placeHolder: "Enter your Instagram handle...",
    type: "text",
  },
] as const;
