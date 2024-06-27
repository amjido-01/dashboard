import React from 'react'
import Icon from './Icon'
import { Separator } from './separator'

const notifications = [
    {
      title: "Applicants",
      numbers: 400,
      icons: "applicants"
    },
    {
      title: "Matches",
      numbers: 100,
      icons: "matches"
    },
    {
      title: "Messages",
      numbers: 147,
      icons: "message"
    },
    {
      title: "Views",
      numbers: 800,
      icons: "views"
    },
  ]

const Card = () => {
  return (
    <div>
       <div>
       <div>
          {notifications.map((notification, index) => (
            <React.Fragment key={index}>
              <div className="mt-[12px] mb-[10px] p-[10px]">
                <div className="space-y-1 flex justify-between items-center">
                  <div className='flex gap-[10px] items-center'>
                    <Icon width={16} height={15} icon={notification.icons} alt="location" extension="svg" />
                    <p className="text-[#4F4F4F] text-[15px] leading-[21.6px] font-medium">
                      {notification.title}
                    </p>
                  </div>
                  <p className="text-[#3D3D3D] text-[20px] leading-[27px] font-semibold">
                    {notification.numbers}
                  </p>
                </div>
              </div>
              {index !== notifications.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
       </div>
    </div>
  )
}

export default Card
