import React from 'react'

const Tabs = () => {
  return (
    

<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap text-[20px] leading-[27px] font-semibold -mb-px">
    <li className="me-2">
            <a href="#" className="inline-block p-4 text-[#DC4A2D] border-b-2 border-[#DC4A2D] rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Jobs Preview</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block  p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Applicants</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Match</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Messages</a>
        </li>
    </ul>
</div>

  )
}

export default Tabs