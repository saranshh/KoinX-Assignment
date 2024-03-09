import { Menu } from "../Resources/Svg";
import Button from "./Button";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-full gap-0">
      <div className="flex items-center justify-start w-24 h-6">
        <div className="flex items-center justify-center w-full h-full">
          <Logo />
        </div>
      </div>
      <div className="hidden mobile:flex mobile:items-center mobile:justify-end mobile:h-full mobile:gap-8 ">
        
        <div className="flex items-center justify-end h-full gap-8 text-base font-semibold">
          {["Crypto Taxes", "Free Tools", "Resource Center"].map(
            (item, key) => {
              return (
                <div
                  className="flex items-center justify-center h-full cursor-pointer"
                  key={key}
                >
                  {item}
                </div>
              );
            }
          )}
        </div>

        <div className="flex items-center justify-center ">
          <Button />
        </div>
      </div>
      <div className="flex items-center justify-end w-6 h-6 mobile:hidden ">
        <Menu/>
      </div>
    </div>
  );
}

export default Navbar;
