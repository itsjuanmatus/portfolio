import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

function BulletTriangle ({ text }) {
  return (
    <div className='inline-flex items-start space-x-4'>
      <svg
        width='18'
        height='17'
        viewBox='0 0 18 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.49519 3.75L17.705 10.1756L6.45499 16.6708L6.49519 3.75Z'
          fill='#3A72E4'
        />
      </svg>
      <p className='dark:text-gray-400'>{text}</p>
    </div>
  )
}
export default function contact () {
  const router = useRouter()

  async function handleOnSubmit (e) {
    e.preventDefault()

    const formData = {}

    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if (!field.name) return
      formData[field.name] = field.value
    })
    console.log(formData)

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    router.push({ pathname: '/' })
  }

  return (
    <div className='flex flex-col flex-wrap min-h-screen py-2 px-5 lg:px-96 bg-white dark:bg-gray-background overflow-x-hidden'>
      <Head>
        <title>Juan Matus</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <main className='grid grid-cols-1 md:grid-cols-2 min-w-max flex-1 mt-10 md:mt-24 justify-center'>
        <div className='max-w-xs md:max-w-xl'>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <h1 className='text-4xl font-bold mb-5 dark:text-white font-sans'>
              Where I've worked{' '}
            </h1>
            <div className='grid gap-y-7'>
              <div>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-blue-137'>
                    PERIGNOSIA
                  </h3>
                  <h3 className='text-lg text-blue-137'>
                    Full Stack Developer
                  </h3>
                  <h3 className='text-lg text-gray-500 '>Jan 2021 - Present</h3>
                </div>
                <p className='text-md text-gray-500 mb-3 '>
                  Probably the most challenging job I’ve had. Learning about
                  natural language processing and semantic web technologies on
                  the go. However, it’s been fun and it has definitely made me a
                  better developer.
                </p>{' '}
                <div className='grid gap-y-3'>
                  <BulletTriangle text='Mostly worked with NextJS, Typescript, ExpressJS, GraphQL, and FlureeDB.' />
                  <BulletTriangle text='Designed both User Experience and User Interface in Figma.' />
                  <BulletTriangle text='Worked with Natural Language Processing in Python using the wordnet library.' />
                  <BulletTriangle text='Secure API Design.' />
                </div>
              </div>

              <div>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-blue-137'>NIUTEK</h3>
                  <h3 className='text-lg text-blue-137'>
                    React Frontend Developer
                  </h3>
                  <h3 className='text-lg text-gray-500'>
                    Sept 2020 - May 2021
                  </h3>
                </div>
                <div className='grid gap-y-3'>
                  <BulletTriangle text='Mostly worked with NextJS and Typescript.' />
                  <BulletTriangle text='Designed User Interface in AdobeXd.' />
                  <BulletTriangle text='Developed and shipped highly interactive features.' />
                </div>
              </div>
              <div>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-blue-137'>
                    TOP MONKEY MEDIA
                  </h3>
                  <h3 className='text-lg text-blue-137'>
                    Freelancing - Wordpress Web Developer
                  </h3>
                  <h3 className='text-lg text-gray-500 '>
                    May 2021 - Aug 2021
                  </h3>
                </div>
                <div className='grid gap-y-3'>
                  <BulletTriangle text='Mostly worked with CSS and Elementor' />
                  <BulletTriangle text='Delivered highly interactive websites for many clients' />
                </div>
              </div>
              <div>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-blue-137'>
                    FUNDACIÓN COSTA RICA
                  </h3>
                  <h3 className='text-lg text-blue-137'>
                    Creative Developer - Freelancing{' '}
                  </h3>
                  <h3 className='text-lg text-gray-500'>Jan 2021 - May 2021</h3>
                </div>
                <div className='grid gap-y-3'>
                  <BulletTriangle text='UX/UI Website Design in Figma.' />
                  <BulletTriangle text='Recorded and edited video content for their website.' />
                  <BulletTriangle text='Developed and shipped highly interactive web features.' />
                </div>
              </div>
              <div>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-blue-137'>QUENCA</h3>
                  <h3 className='text-lg text-blue-137'>
                    Frontend Web Developer{' '}
                  </h3>
                  <h3 className='text-lg text-gray-500'>Jan 2020 - May 2020</h3>
                </div>
                <div className='grid gap-y-3'>
                  <BulletTriangle text='UX/UI Website Design in Figma.' />
                  <BulletTriangle text='Mostly worked with ReactJS.' />
                  <BulletTriangle text='IT Support for a month.' />
                </div>
              </div>
              <div>
                <div className='mb-3'>
                  <h3 className='text-lg font-bold text-blue-137'>
                    HOTEL SAN LUIS
                  </h3>
                  <h3 className='text-lg text-blue-137'>
                    iOS Developer - Contract{' '}
                  </h3>
                  <h3 className='text-lg text-gray-500'>Aug 2018 - Dec 2018</h3>
                </div>
                <p className='text-md text-gray-500 mb-3 '>
                  Guests Service App for a little hotel in Managua, Nicaragua
                </p>{' '}
                <div className='grid gap-y-3'>
                  <BulletTriangle text='Designed User Interface and prototype in AdobeXd.' />
                  <BulletTriangle text='As you would expect: I used Swift and XCode.' />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 '>
        <a
          className='flex items-center justify-center dark:text-white'
          href='/about'
          target='_blank'
        >
          Powered by
          <img src='/favicon.svg' className='w-7 mx-3' />
        </a>
      </footer>
    </div>
  )
}
