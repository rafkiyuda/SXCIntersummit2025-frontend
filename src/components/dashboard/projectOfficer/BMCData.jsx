import React, { useState, useMemo } from "react";
import { Users, Eye, Search, X, Menu } from "lucide-react";

const BMCData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState('bmc');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Participant data
  const [participantData] = useState([
    {
      no: 1,
      name: "Jonathan Raffael",
      email: "jonathanraffael@gmail.com",
      birthdate: "1 August 2006",
      domicile: "North Jakarta",
      education: "University",
      institution: "Bina Nusantara",
      whatsapp: "087xxxxxxx",
      lineId: "jonathanraffeels",
      instagram: "@jonathanraffael"
    },
    {
      no: 2,
      name: "Jonathan Raffael",
      email: "jonathanraffael@gmail.com",
      birthdate: "1 August 2006",
      domicile: "North Jakarta",
      education: "University",
      institution: "Bina Nusantara",
      whatsapp: "087xxxxxxx",
      lineId: "jonathanraffeels",
      instagram: "@jonathanraffael"
    },
  ]);

  const projectList = [
    'chambers', 'company visit', 'international conference', 
    'ibcc', 'ibpc', 'bmc', 'bcl'
  ];

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return participantData;
    }
    
    const searchLower = searchTerm.toLowerCase().trim();
    return participantData.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchLower)
      )
    );
  }, [participantData, searchTerm]);

  const handlePreview = (index) => {
    const participant = filteredData[index];
    const message = Object.entries(participant)
      .filter(([key]) => key !== 'no')
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');
    
    alert(`Preview for ${participant.name}:\n\n${message}`);
  };

  const handleProjectClick = (projectName) => {
    const projectPath = projectName.toLowerCase().replace(/\s+/g, '-');
    setCurrentPage(projectPath);
    setIsMobileMenuOpen(false);
    window.location.href = `/dashboard/project-officer/${projectPath}`;
  };

  const clearSearch = () => setSearchTerm("");
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const ProjectButton = ({ project }) => {
    const projectPath = project.toLowerCase().replace(/\s+/g, '-');
    const isActive = currentPage === projectPath;
    
    return (
      <button
        onClick={() => handleProjectClick(project)}
        className={`block w-full text-left p-1.5 rounded transition-colors cursor-pointer ${
          isActive 
            ? 'bg-purple-600 text-white font-semibold underline' 
            : 'hover:bg-purple-600/50 hover:text-purple-100'
        }`}
      >
        • {project.split(' ').map(word => 
            ['ibcc', 'ibpc', 'bmc', 'bcl'].includes(word.toLowerCase()) 
              ? word.toUpperCase() 
              : word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')}
      </button>
    );
  };

  const MobileProjectMenu = () => (
    <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 z-50 bg-purple-800 border-t border-purple-600`}>
      <div className="p-4">
        <h3 className="text-white font-medium mb-3">List of Projects</h3>
        <div className="grid grid-cols-1 gap-2">
          {projectList.map((project) => (
            <ProjectButton key={project} project={project} />
          ))}
        </div>
      </div>
    </div>
  );

  const DesktopProjectList = () => (
    <div className="hidden lg:block">
      <h3 className="text-white font-medium mb-1 text-sm">List of Projects</h3>
      <div className="bg-[#8257A9] rounded-lg p-3 grid grid-cols-2 gap-1 text-xs text-white min-w-[280px]">
        <div className="space-y-0.5">
          {projectList.slice(0, 4).map((project) => (
            <ProjectButton key={project} project={project} />
          ))}
        </div>
        <div className="space-y-0.5">
          {projectList.slice(4).map((project) => (
            <ProjectButton key={project} project={project} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
          
          {/* Top Row - Program Info & Mobile Menu Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-gray-600" />
              </div>
              <div className="min-w-0">
                <h1 className="text-white font-semibold text-sm sm:text-base truncate">[Program Name]</h1>
                <p className="text-purple-200 text-xs sm:text-sm">
                  Managed by: <span className="text-white">Manager of Program</span>
                  <br className="hidden sm:block" />
                  <span className="text-purple-300 block sm:inline"> MoP@gmail.com</span>
                </p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-purple-600 rounded-lg"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-56 lg:mx-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-white/60" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/20 border border-white/30 rounded-md pl-7 pr-7 py-1.5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 text-xs"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Project List & Logo */}
          <div className="flex items-center space-x-3">
            <DesktopProjectList />

            {/* Logo and Logout */}
            <div className="flex flex-col items-center space-y-1.5">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/images/logo-intersummit-5.png"
                  alt="International Summit Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-2.5 py-1 rounded flex items-center space-x-1.5 text-xs transition-colors cursor-pointer">
                <img
                  src="/images/profile/exit-icon.svg"
                  alt="Logout Icon"
                  className="w-3 h-3"
                />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Project Menu */}
        <MobileProjectMenu />
      </header>

      {/* Search Results Info */}
      {searchTerm && (
        <div className="px-4 sm:px-6 py-2 bg-purple-600/50">
          <p className="text-white/80 text-sm">
            Showing {filteredData.length} of {participantData.length} participants
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4 sm:p-6">
        <div className="bg-purple-600 rounded-lg overflow-hidden shadow-lg">
          
          {/* Mobile Card View */}
          <div className="lg:hidden">
            {filteredData.length > 0 ? (
              <div className="divide-y divide-purple-500">
                {filteredData.map((participant, index) => (
                  <div key={participant.no} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{participant.name}</h3>
                        <p className="text-purple-200 text-sm">{participant.email}</p>
                      </div>
                      <span className="text-white/60 text-sm">#{participant.no}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-purple-200 block">Birth:</span>
                        <span className="text-white">{participant.birthdate}</span>
                      </div>
                      <div>
                        <span className="text-purple-200 block">Location:</span>
                        <span className="text-white">{participant.domicile}</span>
                      </div>
                      <div>
                        <span className="text-purple-200 block">Education:</span>
                        <span className="text-white">{participant.education}</span>
                      </div>
                      <div>
                        <span className="text-purple-200 block">Institution:</span>
                        <span className="text-white">{participant.institution}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-purple-500">
                      <div className="flex space-x-4 text-xs text-purple-200">
                        <span>WA: {participant.whatsapp}</span>
                        <span>Line: {participant.lineId}</span>
                      </div>
                      <button
                        onClick={() => handlePreview(index)}
                        className="flex items-center space-x-1 bg-purple-800 hover:bg-purple-900 px-3 py-1.5 rounded text-white text-sm transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="text-white/80 text-lg mb-2">No participants found</div>
                <div className="text-white/60 text-sm mb-4">
                  {searchTerm ? `No results for "${searchTerm}"` : "No participants available"}
                </div>
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#8257b8]">
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">No</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Name</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Email</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Birthdate</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Domicile</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Education</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Institution</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">ID Card</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">WhatsApp</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Line ID</th>
                  <th className="text-left py-3 px-4 text-white font-medium text-sm">Instagram</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((participant, index) => (
                    <tr key={participant.no} className={index % 2 === 0 ? "bg-[#8257A9]" : "bg-[#8257b8]"}>
                      <td className="py-3 px-4 text-white text-sm">{participant.no}</td>
                      <td className="py-3 px-4 text-white text-sm font-medium">{participant.name}</td>
                      <td className="py-3 px-4 text-white text-sm">{participant.email}</td>
                      <td className="py-3 px-4 text-white text-sm">{participant.birthdate}</td>
                      <td className="py-3 px-4 text-white text-sm">{participant.domicile}</td>
                      <td className="py-3 px-4 text-white text-sm">{participant.education}</td>
                      <td className="py-3 px-4 text-white text-sm">{participant.institution}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handlePreview(index)}
                          className="flex items-center space-x-1 bg-purple-800 hover:bg-purple-900 px-2 py-1 rounded text-white text-sm transition-colors cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Preview</span>
                        </button>
                      </td>
                      <td className="py-3 px-4 text-white text-sm">{participant.whatsapp}</td>
                      <td className="py-3 px-4 text-white text-sm">{participant.lineId}</td>
                      <td className="py-3 px-4 text-white text-sm">{participant.instagram}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="py-12 text-center">
                      <div className="text-white/80 text-lg mb-2">No participants found</div>
                      <div className="text-white/60 text-sm mb-4">
                        {searchTerm ? `No results for "${searchTerm}"` : "No participants available"}
                      </div>
                      {searchTerm && (
                        <button
                          onClick={clearSearch}
                          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                        >
                          Clear Search
                        </button>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BMCData;