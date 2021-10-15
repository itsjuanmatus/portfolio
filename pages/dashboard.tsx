import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

function BulletTriangle ({ text }) {
  return (
    <div className='inline-flex items-start space-x-4 w-full min-w-max'>
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
      <p className='dark:text-gray-400 max-w-xs md:max-w-max'>{text}</p>
    </div>
  )
}
export default function dashboard () {

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
              Dashboard{' '}
            </h1>
            <p className='text-gray-500'>
              This is my personal dashboard, built with Next.js API routes
              deployed as serverless functions. I use this dashboard to track
              various metrics across platforms like YouTube, GitHub,
              and more.
            </p>
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
