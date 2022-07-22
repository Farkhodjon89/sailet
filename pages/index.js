import Collaboration from "../components/Collaboration/Collaboration";
import Creativity from "../components/Creativity/Creativity";
import Kindness from "../components/Kindness/Kindness";
import CollectiveResponsibility from "../components/CollectiveResponsibility/CollectiveResponsibility";
import ElonMusk from "../components/ElonMusk/ElonMusk";
import Footer from "../components/Footer/Footer";
import UpToTheMint from "../components/UpToTheMint/UpToTheMint";
import ReactPageScroller from 'react-page-scroller';


export default function Home() {

  return (
      // <div id="page-scrollable" className="main" style={{maxHeight: '100vh', overflow: 'hidden'}}>
      <div className='wrapper' style={{transform: 'translateY(0px)'}}>
        <Collaboration/>
        <Kindness/>
        <Creativity/>
        <CollectiveResponsibility/>
        <UpToTheMint/>
        <ElonMusk/>
        {/*<Footer/>*/}
      </div>
      // </div>

  )
}
