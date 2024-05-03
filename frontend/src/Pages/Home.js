import CallToAction from "../Components/CallToAction"
import Features from "../Components/Features"
import Frequentlyasked from "../Components/Frequentlyasked"
import Herosection from "../Components/Herosection"
import LefttoRight from "../Components/LefttoRight"
import TeamSection from "../Components/TeamSection"

const Home = () => {
  return (
    <>
      <Herosection />
      <Features />
      <LefttoRight />
      <TeamSection />
      <Frequentlyasked />
      <CallToAction />
    </>
  )
}
export default Home