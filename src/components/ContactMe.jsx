import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { SectionTitle } from '../styles/GlobalComponents'
import { useStore } from '../store'

const axios = require('axios')

export default function ContactMe() {
  const [state, setState] = useState(
    {
      fullName: '',
      email: '',
      phone: '',
      message: ''
    }
  )
  const setIsSubmitted = useStore(store => store.setIsSubmitted)

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('/api/mailer', state)
    if (res.data.success) {
      setIsSubmitted(true)
    }
  }


  return (
    <div className='pt-16' id='contactMe'>
      <SectionTitle>Contact Me</SectionTitle>
      <div className='relative mx-auto lg:grid lg:grid-cols-5'>
        <div className='bg-[#212d45] py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='max-w-lg mx-auto'>
            <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>Get in touch</h2>
            <p className='mt-3 text-2xl  text-gray-300'>
              I&apos;m currently looking for new opportunities. If you&apos;re interested in working together, feel free
              to reach out.
            </p>
            <dl className='mt-8 text-lg text-gray-300'>
              <div className='mt-6'>
                <dt className='sr-only'>Phone number</dt>
                <dd className='flex'>
                  <PhoneIcon className='flex-shrink-0 text-2xl  h-8 w-8 text-gray-100' aria-hidden='true' />
                  <span className='ml-3 text-2xl '>+216 26 003 021</span>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>Email</dt>
                <dd className='flex'>
                  <MailIcon className='flex-shrink-0  h-8 w-8 text-gray-100' aria-hidden='true' />
                  <span className='ml-3 text-2xl '>dimassibassem99@gmail.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='bg-gray-200 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
          <div className='max-w-lg mx-auto lg:max-w-none'>
            <form action='#' method='POST' className='grid grid-cols-1 gap-y-6' onSubmit={handleSubmit}>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor='full-name' className='sr-only'>
                  Full name
                </label>
                <input
                  type='text'
                  name='fullName'
                  id='full-name'
                  autoComplete='name'
                  className='text-[#212d45] bg-gray-200 block w-full drop-shadow py-3 px-4 placeholder-gray-500 focus:ring-[#adafb4] focus:border-[#adafb4] border-[#adafb4] rounded-md'
                  placeholder='Full name'
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='text-[#212d45] bg-gray-200 block w-full drop-shadow py-3 px-4 placeholder-gray-500 focus:ring-[#adafb4] focus:border-[#adafb4] border-gray-300 rounded-md'
                  placeholder='Email'
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor='phone' className='sr-only'>
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='text-[#212d45] bg-gray-200 block w-full drop-shadow py-3 px-4 placeholder-gray-500 focus:ring-[#adafb4] focus:border-[#adafb4] border-gray-300 rounded-md'
                  placeholder='Phone'
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor='message' className='sr-only'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='text-[#212d45] bg-gray-200 block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#adafb4] focus:border-[#adafb4] border border-gray-300 rounded-md'
                  placeholder='Message'
                  defaultValue=''
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#adafb4]'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
