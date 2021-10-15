import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

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
              For business inquiries or collaborations
            </h1>
          </motion.div>
          <form
            className='grid grid-cols-1 md:grid-cols-2 gap-3 md:max-w-2xl max-h-full min-w-max'
            method='post'
            onSubmit={handleOnSubmit}
          >
            <input
              className='p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md'
              placeholder='First Name'
              name='firstname'
              required
            />
            <input
              className='p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md'
              placeholder='Last Name'
              name='lastname'
              required
            />
            <input
              className='p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md md:col-span-2'
              placeholder='Email'
              name='email'
              type='email'
              required
            />
            <textarea
              className='p-3 w-full bg-gray-136 dark:bg-transparent border dark:border-gray-137 dark:text-white dark:placeholder-gray-138 border-gray-138 placeholder-gray-139 text-black rounded-md md:col-span-2 h-36'
              placeholder='Message'
              name='message'
              required
            />
            <button className='bg-blue-137 text-white font-bold min-w-max p-3 w-2 rounded-md'>
              Submit Form
            </button>
          </form>
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
