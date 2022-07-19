import Collaboration from "../components/Collaboration/Collaboration";
import Creativity from "../components/Creativity/Creativity";
import Kindness from "../components/Kindness/Kindness";

export default function Home() {

  return (
      <div className='wrapper'>
        <Collaboration/>
        <Kindness />
        <Creativity/>

      </div>
  )
}
