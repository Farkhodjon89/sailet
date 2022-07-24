import Collaboration from "../components/Collaboration/Collaboration";
import Creativity from "../components/Creativity/Creativity";
import Kindness from "../components/Kindness/Kindness";
import CollectiveResponsibility from "../components/CollectiveResponsibility/CollectiveResponsibility";
import ElonMusk from "../components/ElonMusk/ElonMusk";
import UpToTheMint from "../components/UpToTheMint/UpToTheMint";
import OurPartners from "../components/OurPartners/OurPartners";


export default function Home() {

  return (
      <div className='wrapper'>
        <Collaboration/>
        <Kindness/>
        <Creativity/>
        <CollectiveResponsibility/>
        <UpToTheMint/>
        <ElonMusk/>
        <OurPartners/>
      </div>
  )
}
