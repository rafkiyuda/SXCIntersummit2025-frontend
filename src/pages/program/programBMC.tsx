import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Registeration from '@/components/programBMC/Registeration'
import BmcDefinition from '@/components/programBMC/bmcDefinition'
import Timeline from '@/components/programBMC/Timeline'
import GrandPrize from '@/components/programBMC/GrandPrize'
import FAQBMC from '@/components/programBMC/FAQBMC'

const ProgramBMC: React.FC = () => (
  <div className="min-h-screen text-white bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
    <Navbar />
    <Registeration />
    <BmcDefinition />
    <Timeline />
    <GrandPrize />
    <FAQBMC />
  </div>
)

export default ProgramBMC
