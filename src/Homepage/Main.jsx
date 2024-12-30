import EightSection from "./EightSection";
import FifthSection from "./FifthSection";
import FirstComponent from "./FirstComponent";
import FourthComponent from "./FourthComponent";
import NinethSection from "./NinethSection";
import SecondComponent from "./SecondComponent";
import SeventhSection from "./SeventhSection";
import SixthSection from "./SixthSection";
import TenthSection from "./TenthSection";
import ThirdComponent from "./ThirdComponent";

export default function Main() {
    return (
        <div>
            <FirstComponent/>
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EightSection />
            <NinethSection />
            <TenthSection />
        </div>
    )
}