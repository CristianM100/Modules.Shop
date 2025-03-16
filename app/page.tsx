import Link from 'next/link'
import FeaturesPage from './features/page'
import BlogPage from './blog/page'
import FAQPage from './faq/page'
import Footer from '@/components/layout/Footer'


export default async function Home() {
    return (
      <section className='h-full'>
        <div className='relative isolate h-full overflow-hidden pt-14'>
          <div
            aria-hidden='true'
            className='fixed inset-0 -z-10 bg-black-400 bg-blend-multiply'
          />
          <div className='mx-auto max-w-2xl py-32 px-4 text-black sm:py-48 md:px-6 lg:py-56 xl:px-8'>
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
                <Link
                  href='#'
                  className='text-sm font-semibold leading-6 text-white'
                >
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        <FeaturesPage />
        <BlogPage />
        <FAQPage />
        <Footer />
      </section>
    )
}



