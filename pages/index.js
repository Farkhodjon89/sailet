import Collaboration from "../components/Collaboration/Collaboration";
import Creativity from "../components/Creativity/Creativity";
import Kindness from "../components/Kindness/Kindness";
import CollectiveResponsibility from "../components/CollectiveResponsibility/CollectiveResponsibility";
import ReactFullpage from "@fullpage/react-fullpage";
import UpToTheMint from "../components/UpToTheMint/UpToTheMint";
import ElonMusk from "../components/ElonMusk/ElonMusk";
import Footer from "../components/Footer/Footer";

const pluginWrapper = () => {
}

export default function Home() {

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", {origin, destination, direction});
  }

  return (
      <ReactFullpage
          navigation
          scrollingSpeed={700}
          pluginWrapper={pluginWrapper}
          onLeave={onLeave}
          continuousHorizontal={false}
          scrollHorizontally={false}
          scrollBar={false}
          render={() => (
              <div className='wrapper'>
                <ReactFullpage.Wrapper>
                  <div className="section"><Collaboration/></div>
                  <div className="section fp-noscroll"><Kindness/></div>
                  <div className="section "><Creativity/></div>
                  <div className="section "><CollectiveResponsibility/></div>
                  <div className="section row-direction"><UpToTheMint/></div>
                  <div className="section fp-noscroll"><ElonMusk/></div>
                  <div className="section fp-noscroll"><Footer /></div>
                </ReactFullpage.Wrapper>
              </div>
          )}
        / >
        )}
