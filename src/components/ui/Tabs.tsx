import React from 'react'
import Link from 'next/link'
const Tabs = () => {
  return (
    

<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mt-[7rem]">
    <ul className="container flex flex-wrap text-[18px] leading-[25px] font-medium -mb-px">
    <li className="relative">
            <Link href="/" className="inline-block active p-4 text-[#DC4A2D] border-[#DC4A2D] rounded-t-lg">Jobs Preview</Link>
        </li>
        <li className="">
            <Link href="/applicants" className="inline-block  p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Applicants</Link>
        </li>
        <li className="">
            <Link href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Match</Link>
        </li>
        <li className="">
            <Link href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Messages</Link>
        </li>
    </ul>
</div>

  )
}

export default Tabs