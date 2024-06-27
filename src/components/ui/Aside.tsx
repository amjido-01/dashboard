import React from 'react'
import { Button } from './button';
import Card from './Card';
import Icon from './Icon';
const Aside = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-between'>
        <Button className='bg-[#FEF4F2] border-[0.8px] border-[#DC4A2D] hover:bg-[#FEF4F2] rounded-[8px] text-[#DC4A2D] py-[12px] gap-[10px] px-[24px]'>
      <Icon width={20} height={20} icon='trash' alt='trash' extension='svg'/>
      Delete job
    </Button>
        <Button className='bg-[#DC4A2D] text-white hover:bg-[#DC4A2D]/90 hover:text-white border-[2px] border-[#FED3CA] rounded-[8px] py-[12px] gap-[10px] px-[24px]'>
            <Icon width={20} height={20} icon='edit' alt='edit' extension='svg'/>
       Edit job
    </Button>
        </div>
        <div className='mt-[24px]'>
            <Card />

        </div>
    </div>
  )
}

export default Aside