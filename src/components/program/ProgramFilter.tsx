import React, { useState, useRef, useEffect } from "react";

interface ProgramFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories?: string[];
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  levels?: string[];
}

const CustomDropdown: React.FC<{
  value: string;
  onChange: (val: string) => void;
  options: string[];
  labelMap: (val: string) => string;
  placeholder: string;
  allLabel: string;
  minWidth?: string;
}> = ({
  value,
  onChange,
  options,
  labelMap,
  placeholder,
  allLabel,
  minWidth = "min-w-[160px]",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Determine the label to show on the button
  const getButtonLabel = () => {
    if (value === "all") return allLabel;
    const found = options.find((opt) => opt === value);
    return found ? labelMap(value) : placeholder;
  };

  return (
    <div className={`relative ${minWidth}`} ref={ref}>
      <button
        type="button"
        className={`w-full flex items-center justify-between px-6 py-2 rounded-lg bg-[#3a2992] text-white font-semibold focus:outline-none`}
        onClick={() => setOpen((prev) => !prev)}
        style={{ paddingRight: "18px" }}
      >
        <span className="truncate">{getButtonLabel()}</span>
        <span
          className={`transition-transform duration-150 ease-in-out ml-4 ${open ? "rotate-180" : "rotate-0"}`}
        >
          {/* Outline chevron down */}
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-full rounded-xl shadow-lg z-10 bg-gradient-to-b from-[#8fd3f4] to-[#84fab0]">
          {options.map((opt) => (
            <button
              key={opt}
              className={`block w-full text-left px-6 py-3 text-white font-semibold rounded-xl bg-transparent hover:bg-white/10 transition`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt === "all" ? allLabel : labelMap(opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProgramFilter: React.FC<ProgramFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  categories = [],
  selectedLevel,
  onLevelChange,
  levels = [],
}) => (
  <div className="flex flex-col gap-4 mb-5 mt-8 md:mt-8 md:flex-row">
    <CustomDropdown
      value={selectedCategory}
      onChange={onCategoryChange}
      options={categories}
      labelMap={(cat) =>
        cat.charAt(0).toUpperCase() + cat.slice(1)
      }
      placeholder="Programs"
      allLabel="All Programs"
      minWidth="min-w-[180px] max-w-[220px]"
    />
    <CustomDropdown
      value={selectedLevel}
      onChange={onLevelChange}
      options={levels}
      labelMap={(lvl) => {
        if (lvl === "fresh-graduate") return "Fresh Graduate";
        if (lvl === "high-school") return "High School";
        if (lvl === "public") return "Public";
        if (lvl === "university") return "University";
        return lvl.charAt(0).toUpperCase() + lvl.slice(1).replace("-", " ");
      }}
      placeholder="Education Level"
      allLabel="All Education Levels and Public"
      minWidth="min-w-[210px] max-w-[500px]"
    />
  </div>
);

export default ProgramFilter;