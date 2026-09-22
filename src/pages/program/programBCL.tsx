import React from 'react'
import Registration from '@/components/programBCL/Registeration'
import BclDefinition from '@/components/programBCL/bclDefinition'
import Timeline from '@/components/programBCL/Timeline'
import Benefits from '@/components/programBCL/Benefits'
import FAQBCL from '@/components/programBCL/FAQBCL'

const programBCL = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
        <Registration />
        <BclDefinition />
        <Timeline />
        <Benefits />
        <FAQBCL />
    </div>
  )
}

export default programBCL
