import Tabs from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/Icon";
export default function Home() {
  return (
   <main className="container border-2 h-screen border-red-500 mt-[7rem]">
      <Tabs />
      <div className="flex flex-col md:flex-row gap-4 mt-[36px]"> 
        <div className="w-[70%] border-2 border-red-500">
          <div className="flex flex-row items-center gap-[28px] p4">
            <h1 className="text-[32px] leading-[47.25px] font-semibold text-[#3D3D3D]">Senior Product Designer</h1>
            <div className="flex flex-row items-center gap-2">
            <p className="text-[#888888] text-[14px] font-medium leading-[18.9px]">Posted 2 days ago</p>
            <Badge className="text-[#067647] bg-[#ECFDF3] flex gap-[4px]" variant="outline">
              <span className="w-[6px] h-[6px] rounded-full bg-[#17B26A]"></span>
                <p className=" text-[12px] leading-[18px] font-medium">Open</p>
              </Badge>
            </div>
            </div>
            <div className="flex flex-row gap-[36px] my-[16px]">
              <p className="flex justify-center items-center gap-[8px]">
                <Icon width={16} height={20} icon="location" alt="location" extension="svg" />
                Delaware, USA
                </p>
              <p className="flex justify-center items-center gap-[8px]">
              <Icon width={16} height={20} icon="money" alt="location" extension="svg" />
                $300k-$400k
              </p>
            </div>
        </div>
        <aside className="w-[30%] border-2 border-red-500"></aside>
      </div>
   </main>
  );
}
