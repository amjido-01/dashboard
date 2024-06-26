import React from 'react'
import Icon from './Icon'
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="py-12 mx-auto">
        <div className='flex'>
            <Icon width={40} height={40} icon="footer" alt='logo' extension='png' />
            <h4>Atlassian</h4>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer