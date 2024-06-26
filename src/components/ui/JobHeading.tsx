import React from 'react'
import { Badge } from './badge';
import Icon from './Icon';
const JobHeading = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-[28px] p4 ">
        <h1 className="text-[30px] leading-[45px] font-semibold text-[#3D3D3D]">Senior Product Designer</h1>
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
  )
}

export default JobHeading