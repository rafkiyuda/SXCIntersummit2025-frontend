import { Megaphone } from "lucide-react";
import React, { useState } from "react";
import SideBarSection from "@/components/profile/SideBarSection";
import { useNavigate, useParams } from "react-router-dom";
import Announcement from "./Announcement";
import RegisteredPrograms from "./RegisteredPrograms";
import Tasks from "./Tasks";
import { useUserStore } from "@/store/userStore";
import useGetUserData from "@/hooks/User/useGetUserData";
import RegisterProgram from "./RegisterProgram";
const programNameImage = [
  {
    name: "bcl",
    image: "/images/programpage/bcl/BCLCompetition.png",
  },
  {
    name: "ibcc",
    image: "/images/programpage/ibcc/IBCC.png",
  },
  {
    name: "all",
    image: null,
  },
];
const getProgramNameImage = (name: string | undefined) => {
  if (name === undefined) return "";
  const program = programNameImage.find((prog) => prog.name === name);
  return program ? program.image : "";
};
const ProfileHome = () => {
  const { programName } = useParams();
  const { data } = useGetUserData();

  const navigate = useNavigate();

  const [currentProgram, setCurrentProgram] = useState(programName);

  return (
    <div className="flex-1 mx-auto md:px-20 py-6">
      {/* <img src={getProgramNameImage(programName)} alt="" /> */}
      {/* {programName !== "all" && <Announcement />} */}
      {programName === "all" && <RegisteredPrograms />}
      {/* {programName === "all" && <Tasks />} */}  
      {programName !== "all" && <RegisterProgram />}
    </div>
  );
};

export default ProfileHome;
