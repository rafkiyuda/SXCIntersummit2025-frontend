import React from "react";
import ProgramOverview from "./Program";
import ProgramBMC from "./programBMC";
import ProgramBCL from "./programBCL";
import ProgramIBCC from "./programIBCC";
import ProgramPlaceholder from "./ProgramPlaceholder";
import ProgramIBPC from "./programIBPC";
import ProgramChambers from "./programChambers";

export default [
  {
    index: true,
    element: <ProgramOverview />,
  },
  {
    path: "bmc",
    element: <ProgramBMC />,
  },
  {
    path: "BCL",
    element: <ProgramBCL />,
  },
  {
    path: "ibcc",
    element: <ProgramIBCC />,
  },
  {
    path: "ibpc",
    element: <ProgramIBPC />,
  },
  {
    path: "placeholder",
    element: <ProgramPlaceholder />,
  },
  {
    path: "chambers",
    element: <ProgramChambers />,
  },
];
