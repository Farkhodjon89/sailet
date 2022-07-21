import Collaboration from "../components/Collaboration/Collaboration";
import Creativity from "../components/Creativity/Creativity";
import Kindness from "../components/Kindness/Kindness";
import CollectiveResponsibility from "../components/CollectiveResponsibility/CollectiveResponsibility";
import ReactFullpage from "@fullpage/react-fullpage";

const pluginWrapper = () => {
}

export default function Home() {

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", {origin, destination, direction});
  }

  return (
      <ReactFullpage
          navigation
          pluginWrapper={pluginWrapper}
          onLeave={onLeave}
          continuousHorizontal={false}
          scrollHorizontally={false}
          scrollBar={false}
          // scrollOverflowReset={true}
          render={() => (
              <div className='wrapper'>
                <ReactFullpage.Wrapper>
                  <div className="section"><Collaboration/></div>
                  <div className="section fp-noscroll"><Kindness/></div>
                  <div className="section "><Creativity/></div>
                  <div className="section "><CollectiveResponsibility/></div>
                  <div className="section"></div>
                </ReactFullpage.Wrapper>
              </div>
          )}
        / >
        )}
