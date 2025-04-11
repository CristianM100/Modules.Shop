import Link from 'next/link'; 

export default function Hero() {
    return (
        <div className='relative isolate h-full overflow-hidden'>
          <div
            aria-hidden='true'
            className='fixed inset-0 -z-10 bg-blend-multiply'
          />
          <div className='mx-auto max-w-2xl py-8 px-4 text-black sm:py-12 md:px-8 lg:py-16 xl:px-16'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'>
                Online Programming Courses
              </h1>
              <p className='text-black mt-6 text-lg leading-8'>
                Online Software Development Courses for beginners
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link
                  href='/products'
                  className='rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400'
                >
                  Purchase Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
    )      
}