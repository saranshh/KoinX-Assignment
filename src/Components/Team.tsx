import Img from "../Resources/Png/TeamImg.png";
import Img3 from "../Resources/Png/TeamImg2.png";
import Img2 from "../Resources/Png/TeamImg3.png";

interface Props {
    Img: string;
}

function Team() {
  return (
    <div className="flex flex-col gap-6 p-6 pb-10 bg-white rounded-lg">
      <div className="text-2xl font-semibold text-headingColor">Team</div>
      <div className="text-base font-medium text-mainText">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </div>
      <ProfileCard Img={Img} />
      <ProfileCard Img={Img2} />
      <ProfileCard Img={Img3} />
    </div>
  );
}
function ProfileCard(props: Props) {
  const { Img } = props;
  return (
    <div className="bg-[#E8F4FD] rounded-lg py-4 px-4">
      <div className="flex-col mobile:flex mobile:flex-row mobile:items-center mobile:justify-between ">
        <div className="flex flex-col items-center w-full gap-2">
          <img src={Img} alt="img" />
          <div>
            <div className="text-base font-semibold text-center">
              John Smith
            </div>
            <div className="text-[#788F9B] font-medium text-xs">
              Frontend Developer
            </div>
          </div>
        </div>
        <div className=" text-sm font-normal text-[#0F1629]">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </div>
      </div>
    </div>
  );
}

export default Team;
