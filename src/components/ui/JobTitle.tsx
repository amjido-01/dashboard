import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow, 
} from "./table";
import { Badge } from './badge';
import Icon from './Icon';
export const JobTitle = () => {
  return (
    <div className=''>
          <Table>
  <TableHeader>
    <TableRow className='text-red-500'>
      <TableHead>Skills Required</TableHead>
      <TableHead>Preferred Language</TableHead>
      <TableHead>Type</TableHead>
      <TableHead>Year of Experience</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="px-2 py-1">
        <div className='inline-flex'>
        <Badge className="text-[#344054] w-auto rounded-sm py-[4px] border-[1px] border-[#D0D5DD] px-[6px] flex gap-[4px]" variant="outline">
            <Icon alt='figma' extension='svg' width={16} height={16} icon='figma' />
            <p className=" text-[12px] leading-[16.2px] font-medium">Figma</p>
          </Badge>
        </div>
      </TableCell>
      <TableCell>
        <p className=' font-semibold text-[16px] leading-[21.6px] text-[#3D3D3D]'>English</p>
      </TableCell>
      <TableCell>
        <p className=' font-semibold text-[16px] leading-[21.6px] text-[#3D3D3D]'>Full Time</p>
      </TableCell>
      <TableCell>
        <p className=' font-semibold text-[16px] leading-[21.6px] text-[#3D3D3D]'>3+ Years of Experience</p>
      </TableCell>
    </TableRow>
    <TableRow>
    <TableCell className='px-2 py-1'>
      <div className='inline-flex'>
      <Badge className="text-[#344054] rounded-sm py-[4px] border-[1px] border-[#D0D5DD] px-[6px] flex gap-[4px]" variant="outline">
            <Icon alt='figma' extension='svg' width={16} height={16} icon='adobe' />
            <p className=" text-[12px] leading-[16.2px] font-medium">Adobe Illustrator</p>
          </Badge>
      </div>
      </TableCell>
    </TableRow>
    <TableRow>
    <TableCell className='px-2 py-1'>
      <div className='inline-flex'>
      <Badge className="text-[#344054] rounded-sm py-[4px] border-[1px] border-[#D0D5DD] px-[6px] flex gap-[4px]" variant="outline">
            <Icon alt='figma' extension='svg' width={16} height={16} icon='xd' />
            <p className=" text-[12px] leading-[16.2px] font-medium">Adobe XD</p>
          </Badge>
      </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>

  )
}
