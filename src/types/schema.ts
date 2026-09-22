import { z } from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email must be filled."),
  password: z.string().nonempty("Password must be filled."),
});

export const registerschema = z
  .object({
    name: z.string().nonempty("First name is required."),
    email: z
      .string()
      .email("Invalid email address.")
      .nonempty("Email is required."),
    pass: z
      .string()
      .nonempty("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/\d/, "Password must contain at least one number.")
      .regex(
        /[!@#$%^&*]/,
        "Password must contain at least one special character (!@#$%^&*)."
      ),
    pass2: z.string().nonempty("Password confirmation is required."),
    referralCode: z.string().optional(),
  })
  .refine((data) => data.pass === data.pass2, {
    message: "Passwords do not match.",
    path: ["pass2"],
  });
export const resetPass = z
  .object({
    newPass: z
      .string()
      .nonempty("New Password is required.")
      .min(8, "New Password must be at least 8 characters long.")
      .regex(
        /[A-Z]/,
        "New Password must contain at least one uppercase letter."
      )
      .regex(
        /[a-z]/,
        "New Password must contain at least one lowercase letter."
      )
      .regex(/\d/, "New Password must contain at least one number.")
      .regex(
        /[!@#$%^&*]/,
        "New Password must contain at least one special character (!@#$%^&*)."
      ),
    newPass2: z.string().nonempty("Password confirmation is required."),
  })
  .refine((data) => data.newPass === data.newPass2, {
    message: "Passwords do not match.",
    path: ["newPass2"],
  });

// export const userDataSchema = z.object({
//   name: z.string().nonempty("Name is required."),
//   email: z
//     .string()
//     .email("Invalid email address.")
//     .nonempty("Email is required."),
//   birthDate: z.coerce.date({ invalid_type_error: "Invalid date." }),
//   domicile: z.string().nonempty("Domicile is required."),
//   studentID: z.instanceof(File, { message: "Student ID must be a file." }),
//   whatsappNumber: z.string().nonempty("WhatsApp number is required."),
//   lineID: z.string().nonempty("Line ID is required."),
//   insta: z.string().nonempty("Instagram is required."),
// });

export const userDataSchema = z
  .object({
    name: z.string().nonempty("Name is required."),
    email: z
      .string()
      .email("Invalid email address.")
      .nonempty("Email is required."),
    birthdate: z.coerce.date({ invalid_type_error: "Invalid date." }),
    domicile: z.string().nonempty("Domicile is required."),
    studentID: z
      .union([
        z.instanceof(File, { message: "Student ID must be a file." }),
        z.string().url("Invalid file URL"),
      ])
      .optional(),
    wa_number: z.string().nonempty("WhatsApp number is required."),
    line_id: z.string().nonempty("Line ID is required."),
    insta_acc: z.string().nonempty("Instagram is required."),

    // extra fields
    educationStatus: z.enum(["highschool", "university"], {
      required_error: "Education status is required",
    }),
    institution: z.string().nonempty("Current Year is required."),
    schoolName: z.string().optional(),
    univName: z.string().optional(),
    majorName: z.string().optional(),
  })
  .refine(
    (data) =>
      data.educationStatus === "highschool"
        ? !!data.schoolName
        : !!data.univName && !!data.majorName,
    {
      message: "Please complete your school/university info.",
      path: ["educationStatus"],
    }
  );

const RoleEnum = z.enum([
  "ADMIN",
  "BMC_ADMIN",
  "BCL_ADMIN",
  "IBCC_ADMIN",
  "IBPC_ADMIN",
  "CHAMBERS_ADMIN",
  "COMPANY_VISIT_ADMIN",
  "IC_ADMIN",
  "PO",
  "",
]);

export const AddAdminSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter a valid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "Use letters and numbers"),
  role: RoleEnum, // select must match one of the enum values
  divisionId: z.string({
    invalid_type_error: "Please select a division",
  }),
});
export const AddReferralSchema = z.object({
  code: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  desc: z.string({ required_error: "desc is required" }),
  amount: z
    .number({ required_error: "Amount is required" })
    .min(0, "Amount must be a positive number"),
  creation: z.coerce.date({ invalid_type_error: "Invalid date." }),
  validUntil: z.coerce.date({ invalid_type_error: "Invalid date." }),
});
