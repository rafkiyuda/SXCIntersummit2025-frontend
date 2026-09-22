import React from 'react';

interface Participant {
  id: number;
  name: string;
  team: string;
  teamCode: string;
  proofUrl: string;
  paymentStatus: string;
  submissionStatus: string;
  status: number;
  score: number;
}

interface ParticipantTableProps {
  participants: Participant[];
  selectedIds: Set<number>;
  setSelectedIds: (ids: Set<number>) => void;
}

const ParticipantTable: React.FC<ParticipantTableProps> = ({ participants, selectedIds, setSelectedIds }) => {
  const handleCheckboxChange = (id: number) => {
    const newSelectedIds = new Set(selectedIds);
    if (newSelectedIds.has(id)) {
      newSelectedIds.delete(id);
    } else {
      newSelectedIds.add(id);
    }
    setSelectedIds(newSelectedIds);
  };

  return (
    <div className="bg-[#8257A9] rounded-l shadow-lg max-h-[500px] overflow-auto">
      <div className="overflow-auto">
        <table className="min-w-full divide-y divide-white-1000">
          <thead className="bg-[#8257A9] text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {/* No select all here, handled by TopBar */}
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                All ({participants.length})
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                Nama Tim
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                Kode Tim
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                Proof of Promotion
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                Payment
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                Submission
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#8257A9] divide-y divide-white-10000">
            {participants.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(p.id)}
                    onChange={() => handleCheckboxChange(p.id)}
                    className="rounded text-white focus:ring-[#59268f]"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white-900">{p.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white-500">{p.team}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white-500">
                  <div className="flex items-center space-x-1">
                    <span>{p.teamCode}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                  <a href={p.proofUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Open Link</a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-2 group">
                    <span className="text-white-500 group-hover:underline cursor-pointer">Preview</span>
                    <a href="#" className="text-white group-hover:underline hover:text-[#59268f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-white-500 hover:underline cursor-pointer">Preview</span>
                    <a href="#" className="text-white hover:text-[#59268f]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-grey-500">
                  <input
                    type="text"
                    defaultValue={p.status}
                    className="w-24 rounded-md border-white-300 shadow-sm focus:border-white focus:ring-white bg-white text-gray-800"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    defaultValue={p.score}
                    className="w-20 rounded-md border-white-300 shadow-sm focus:border-[#6c2eb7] focus:ring-[#6c2eb7] bg-white text-right text-gray-800"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantTable;