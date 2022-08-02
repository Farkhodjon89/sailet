import Collaboration from "../components/Collaboration/Collaboration";
import Creativity from "../components/Creativity/Creativity";
import Kindness from "../components/Kindness/Kindness";
import CollectiveResponsibility from "../components/CollectiveResponsibility/CollectiveResponsibility";
import ElonMusk from "../components/ElonMusk/ElonMusk";
import UpToTheMint from "../components/UpToTheMint/UpToTheMint";
import OurPartners from "../components/OurPartners/OurPartners";
import {useEffect, useState} from "react";
import Preloader from "../components/Preloader/Preloader";


export default function Home() {

  const DELAY = 6000;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), DELAY + 2200);
  }, []);

  return (
      <div className='wrapper'>
        {!isLoading && <Preloader delay={DELAY}/>}
        {isLoading && (
            <>
              <Collaboration/>
              <Kindness/>
              <Creativity/>
              <CollectiveResponsibility/>
              <UpToTheMint/>
              <ElonMusk/>
              <OurPartners/>
            </>
        )}
      </div>
  )
}
