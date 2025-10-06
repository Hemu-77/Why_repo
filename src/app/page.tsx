import HomePage from "./(website)/home/page";
import PageTransitionWrapper from "@/Components/Common/RevealAnimation";

export default function App() {
  return (
   <>
   <PageTransitionWrapper>
   <HomePage/>
   </PageTransitionWrapper>
   </>
  );
}