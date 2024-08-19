import earphone from "../../assets/category/earphone.png";
import watch from "../../assets/category/watch.png";
import macbook from "../../assets/category/macbook.png";
import gaming from "../../assets/category/gaming.png";
import vr from "../../assets/category/vr.png";
import speaker from "../../assets/category/speaker.png";
import Button from "../../shared/Button";

const Category = () => {
  return (
    <div className="py-8 ">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className=" py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div className="">
              <div className="mb-4 ">
                <p className=" mb-[2px] text-gray-400">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-20">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={earphone}
              alt=""
              className=" w-[320px] absolute bottom-0"
            />
          </div>
          <div className=" py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div className="">
              <div className="mb-4 ">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-40">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandYellow"
                />
              </div>
            </div>
            <img
              src={watch}
              alt=""
              className=" w-[320px] absolute bottom-0 -right-4 lg:top-[40px]"
            />
          </div>
          <div className=" col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div className="">
              <div className="flex flex-col gap-1 mb-4">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold ">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-40">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div>
            </div>
            <img
              src={macbook}
              alt=""
              className=" w-[300px] absolute bottom-0 top-1/2 -translate-y-1/2 -right-0 "
            />
          </div>
          <div className=" col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div className="">
              <div className="flex flex-col gap-1 mb-4 ">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-40">
                  PS5
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={gaming}
              alt=""
              className=" w-[250px] absolute top-1/2 right-0 -translate-y-1/2 "
            />
          </div>
          <div className="  py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/100 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div className="">
              <div className="flex flex-col gap-1 mb-4 ">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-40">
                  VR
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div>
            </div>
            <img
              src={vr}
              alt=""
              className=" w-[300px] absolute bottom-0 right-0  "
            />
          </div>
          <div className="  py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/100 text-white rounded-3xl relative h-[320px] flex items-start ">
            <div className="">
              <div className="flex flex-col gap-1 ">
                <p className=" mb-[2px] text-white">Enjoy</p>
                <p className=" text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl font-bold xl:text-5xl opacity-40">
                  Speaker
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img
              src={speaker}
              alt=""
              className=" w-[200px] absolute bottom-0 right-0  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
