const divisionOptions = [
  { id: 8, label: "IT" },
  { id: 4, label: "BCL" },
  { id: 1, label: "BMC" },
  { id: 6, label: "COMPANYVISIT" },
  { id: 2, label: "IBCC" },
  { id: 3, label: "IBPC" },
  { id: 9, label: "PO" },
  { id: 7, label: "IC" },

  { id: 5, label: "CHAMBERS" },
];
const programDateLink = [
  { id: 1, label: "Aug 25 - Sep 25", link: "" }, //BMC
  { id: 2, label: "Sept 8 - Nov 30", link: "/profile/home/ibpc/register" }, //IBPC
  { id: 3, label: "Sept 8 - Nov 30", link: "/profile/home/ibcc/register" }, //IBCC
  { id: 4, label: "Sep 25 - Nov 25", link: "" }, //BCL
  { id: 5, label: "Sep 25 - Nov 25", link: "" }, //CHAMBERS
  { id: 6, label: "Oct 25 - Nov 25", link: "" }, //COMPANYVISIT
  { id: 7, label: "Nov 25 - Nov 25", link: "" }, //IC
];

// const statusOptions = [
//   INSERT INTO `status` (`id`, `code`, `description`) VALUES
// (1, '0', 'Peserta REGISTERED Data Diri BELUM LENGKAP'),
// (2, '1', 'Peserta REGISTERED Data Diri LENGKAP'),
// (3, '2', 'Proof of Promotion VALID'),
// (4, '3', 'Proof of Promotion TIDAK VALID'),
// (5, '4', 'Proof of Promotion VALID Payment VALID'),
// (6, '5', 'Proof of Promotion VALID Payment TIDAK VALID'),
// (7, '6', 'Proof of Promotion TIDAK VALID Payment VALID'),
// (8, '7', 'Proof of Promotion TIDAK VALID Payment TIDAK VALID'),
// (9, '8', 'BUFFER/Buat Project Tanda Submission Tim Sudah Direview'),
// (10, '9', 'TIDAK LOLOS ke Semifinal'),
// (11, '10', 'LOLOS ke Semifinal'),
// (12, '11', 'TIDAK LOLOS ke Final'),
// (13, '12', 'LOLOS ke Final'),
// (14, '13', 'Jumlah Peserta Mencukupi'),
// (15, '14', 'Team Tidak Valid');

export function getDivisionLabel(id: number) {
  const division = divisionOptions.find((d) => d.id === id);
  return division ? division.label : "Unknown";
}

export function getDateLabel(id: number) {
  const date = programDateLink.find((d) => d.id === id);
  return date ? date.label : "Unknown";
}

export function formatDate(isoString: Date) {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateAnnouncement(date: Date | string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatTime(date: Date | string): string {
  const d = new Date(date);
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0 -> 12
  return `${hours}:${minutes} ${ampm}`;
}

export function isOverdue(dueDate: string) {
  const parsedDate = new Date(dueDate.replace(",", ""));
  return parsedDate < new Date();
}
