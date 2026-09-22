import Registration from "@/components/programChambers/Registration";   
import ChambersDefinition from "@/components/programChambers/ChambersDefinition";
import Timeline from "@/components/programChambers/Timeline";
import ChambersDate from "@/components/programChambers/DateChambers";
import ChambersDate2 from "@/components/programChambers/DateChambers2";
import SpeakersChambers from "@/components/programChambers/SpeakersChambers";
import SpeakersChambers2 from "@/components/programChambers/SpeakersChambers2";
import Benefits from "@/components/programChambers/Benefits";
import FAQ from "@/components/programChambers/FAQChambers";
import ContactPerson from "@/components/programChambers/ContactPerson";

const programChambers = () => {
    return (
        <div>
            <Registration />
            <ChambersDefinition />
            {/* <Timeline /> */}
            <ChambersDate />
            <SpeakersChambers />
            <ChambersDate2 />
            <SpeakersChambers2 />
            <Benefits />
            <FAQ />
            <ContactPerson />
        </div>
    )
}

export default programChambers;
