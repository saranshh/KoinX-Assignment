import BreadCrumb from "../Components/BreadCrumb";
import Cardcontent from "../Components/Cardcontent";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className=" h-fit bg-mainBg">
      <div className="flex items-center justify-center h-[60px] px-6 bg-white mobile:px-14">
        <Navbar />
      </div>
      <div className="px-3 py-3 mobile:px-14">
        <BreadCrumb/>
      </div>
      <div className="mx-3 mb-14 mobile:mx-14">
        <Cardcontent/>
      </div>

      {/* Footer */}
      <div className="w-full h-full bg-white mobile:px-14">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
