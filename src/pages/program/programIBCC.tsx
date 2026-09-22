import React from 'react'
import Registration from '@/components/programIBCC/Registeration'
import IbccDefinition from '@/components/programIBCC/ibccDefinition'
import Timeline from '@/components/programIBCC/Timeline'
import PrizePool from '@/components/programIBCC/PrizePool'
import Benefits from '@/components/programIBCC/Benefits'
import FAQIBCC from '@/components/programIBCC/FAQIBCC'


const programIBCC = () => {
  return (
    <div>
      <Registration />
      <IbccDefinition />
      <Timeline />
      <PrizePool />
      <Benefits />
      <FAQIBCC />
    </div>
  )
}

export default programIBCC
