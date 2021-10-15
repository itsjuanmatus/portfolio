import { useRouter } from 'next/router'
import Link from 'next/link'
import useDarkMode from './useDarkMode'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import * as Icon from 'react-bootstrap-icons'

export default function Sidebar () {
  useEffect(() => {
    setTheme('light')
  }, [])
  const router = useRouter()
  const [colorTheme, setTheme]: any = useDarkMode()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <aside className='hidden lg:block justify-center fixed bg-white dark:bg-gray-background 7 h-screen w-1/6 max-w-1/6 pt-10'>
        <a href='/'>
          <motion.div
            animate='active'
            whileHover={{ rotate: 360 }}
            whileTap={{ scale: 1.2 }}
          >
            <img src='/favicon.svg' className='m-auto mb-24' />
          </motion.div>
        </a>
        <nav className='text-white text-base font-semibold pt-3 grid justify-items-center'>
          <Link href='/'>
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == '/'
                  ? 'visited:text-blue-137 dark:visited:text-blue-137'
                  : ''
              }`}
            >
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == '/about'
                  ? 'visited:text-blue-137 dark:visited:text-blue-137'
                  : ''
              }`}
            >
              About
            </a>
          </Link>
          <Link href='/work'>
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == '/portfolio'
                  ? 'visited:text-blue-137 dark:visited:text-blue-137'
                  : ''
              }`}
            >
              Work
            </a>
          </Link>

          <Link href='/contact'>
            <a
              className={`flex items-center dark:text-white text-black py-4 hover:text-blue-300 ${
                router.pathname == '/contact'
                  ? 'visited:text-blue-137 dark:visited:text-blue-137'
                  : ''
              }`}
            >
              Contact
            </a>
          </Link>
        </nav>
        <div className='inline-flex w-full justify-center items-center space-x-5'>
          {colorTheme === 'light' ? (
            <motion.div whileTap={{ rotate: 360 }}>
              <svg
                onClick={() => setTheme('light')}
                xmlns='http://www.w3.org/2000/svg'
                className='w-7 upgrade-btn bottom-0  text-white flex items-center justify-center py-32 m-auto'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div whileTap={{ rotate: 360 }}>
              <img
                onClick={() => setTheme('dark')}
                src='/images/moon.svg'
                className='w-7 upgrade-btn bottom-0  text-black flex items-center justify-center py-32 m-auto'
              />
            </motion.div>
          )}
          <motion.div whileTap={{ rotate: 360 }}>
            <a href='https://github.com/itsjuanmatus' target='_blank'>
              <svg
                width='29'
                height='29'
                viewBox='0 0 29 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current text-black dark:text-white'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M14.5 0C6.48875 0 0 6.48875 0 14.5C0 20.9163 4.15063 26.3356 9.91438 28.2569C10.6394 28.3838 10.9113 27.9488 10.9113 27.5681C10.9113 27.2238 10.8931 26.0819 10.8931 24.8675C7.25 25.5381 6.3075 23.9794 6.0175 23.1638C5.85438 22.7469 5.1475 21.46 4.53125 21.1156C4.02375 20.8438 3.29875 20.1731 4.51312 20.155C5.655 20.1369 6.47062 21.2063 6.7425 21.6413C8.0475 23.8344 10.1319 23.2181 10.9656 22.8375C11.0925 21.895 11.4731 21.2606 11.89 20.8981C8.66375 20.5356 5.2925 19.285 5.2925 13.7388C5.2925 12.1619 5.85438 10.8569 6.77875 9.84188C6.63375 9.47938 6.12625 7.99313 6.92375 5.99938C6.92375 5.99938 8.13812 5.61875 10.9113 7.48563C12.0712 7.15938 13.3038 6.99625 14.5363 6.99625C15.7688 6.99625 17.0012 7.15938 18.1613 7.48563C20.9344 5.60063 22.1488 5.99938 22.1488 5.99938C22.9463 7.99313 22.4388 9.47938 22.2938 9.84188C23.2181 10.8569 23.78 12.1438 23.78 13.7388C23.78 19.3031 20.3906 20.5356 17.1644 20.8981C17.69 21.3513 18.1431 22.2213 18.1431 23.5806C18.1431 25.52 18.125 27.0788 18.125 27.5681C18.125 27.9488 18.3969 28.4019 19.1219 28.2569C22.0003 27.285 24.5016 25.435 26.2736 22.9672C28.0456 20.4994 28.9991 17.5381 29 14.5C29 6.48875 22.5113 0 14.5 0Z'
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </aside>

      {/** Mobile Nav Bar */}

      <div className='flex items-center justify-between lg:hidden w-full dark:bg-gray-background px-4 pt-2'>
        <div className='inline-flex items-center min-h-full'>
          <Link href='/'>
            <motion.div animate='active' whileTap={{ scale: 1.4, rotate: 900 }}>
              <img
                className='h-20 w-20 p-4'
                src='/favicon.svg'
                alt='logo'
                onClick={() => setIsOpen(!isOpen)}
              />
            </motion.div>
          </Link>
          {colorTheme === 'light' ? (
            <motion.div whileTap={{ rotate: 360 }}>
              <svg
                onClick={() => setTheme('light')}
                viewBox='0 0 29 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 bottom-0 flex items-center justify-center'
              >
                <path
                  d='M25.375 15.4546C25.1849 17.5114 24.413 19.4716 23.1496 21.1057C21.8861 22.7398 20.1834 23.9803 18.2406 24.6821C16.2979 25.3838 14.1955 25.5177 12.1794 25.0682C10.1633 24.6187 8.31695 23.6042 6.85636 22.1436C5.39576 20.683 4.38135 18.8367 3.93181 16.8206C3.48227 14.8045 3.6162 12.7021 4.31793 10.7594C5.01967 8.81662 6.26017 7.1139 7.8943 5.85045C9.52843 4.587 11.4886 3.81508 13.5454 3.625C12.3412 5.25416 11.7617 7.26142 11.9124 9.28171C12.0631 11.302 12.9338 13.2011 14.3664 14.6336C15.7989 16.0662 17.698 16.9369 19.7183 17.0876C21.7386 17.2383 23.7458 16.6588 25.375 15.4546Z'
                  fill='white'
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div whileTap={{ rotate: 360 }}>
              <img
                onClick={() => setTheme('dark')}
                src='/images/moon.svg'
                className='w-7 bottom-0 flex items-center justify-center z-20'
              />
            </motion.div>
          )}
        </div>
        <motion.div whileTap={{ rotate: 360 }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white '
            aria-controls='mobile-menu'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            {!isOpen ? (
              <motion.div
                animate={{
                  originX: 54,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0
                }}
              >
                <svg
                  className='stroke-current stroke-3 fill-current text-gray-background dark:text-gray-137'
                  width='36'
                  height='24'
                  viewBox='0 0 36 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line x1='2.5' y1='1.5' x2='21.5' y2='1.5' />
                  <line x1='1.5' y1='11.5' x2='34.5' y2='11.5' />
                  <line x1='10.5' y1='22.5' x2='29.5' y2='22.5' />
                </svg>
              </motion.div>
            ) : (
              <svg
                className='block h-6 w-6 stroke-current stroke-3 fill-current text-gray-background dark:text-gray-137'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            )}
          </button>
        </motion.div>
      </div>

      <Transition
        show={isOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {ref => (
          <div className='lg:hidden' id='mobile-menu'>
            <div
              ref={ref}
              className='px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-gray-background'
            >
              <Link href='/'>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  className='text-gray-background dark:text-white font-semibold block px-3 py-2 rounded-md text-base'
                >
                  Home
                </a>
              </Link>
              <Link href='/about'>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  className='text-gray-background dark:text-white font-semibold block px-3 py-2 rounded-md text-base'
                >
                  About
                </a>
              </Link>
              <Link href='/work'>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  className='text-gray-background dark:text-white font-semibold block px-3 py-2 rounded-md text-base'
                >
                  Work
                </a>
              </Link>
              <Link href='/contact'>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  className='text-gray-background dark:text-white font-semibold block px-3 py-2 rounded-md text-base'
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </>
  )
}
