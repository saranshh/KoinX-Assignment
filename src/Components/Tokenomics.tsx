import { Circle, PieChartSVG } from "../Resources/Svg";

function Tokenomics() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg">
      <div className="text-2xl font-semibold text-headingColor">Tokenomics</div>
      <div className="text-xl font-semibold text-[#1d1d1d]">
        Initial Distribution
      </div>

      <div className="flex-col gap-4 py-3 mobile:flex mobile:items-center mobile:justify-start mobile:gap-2">
        <div className="px-4">
          <PieChartSVG />
        </div>

        <div className="flex flex-col gap-6 px-4 mt-2">
          <div className="flex items-center justify-start gap-1">
            <Circle code="#0082FF" />
            <div className="text-base font-normal text-[#202020]">
              Crowdsale investors: 80%
            </div>
          </div>
          <div className="flex items-center justify-start gap-1">
            <Circle code="#FAA002" />
            <div className="text-base font-normal text-[#202020]">
              Crowdsale investors: 80%
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 text-base font-medium text-mainText">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </div>
    </div>
  );
}

export default Tokenomics;
