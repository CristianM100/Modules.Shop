
import Hero from './hero/page'
import FeaturesPage from './features/page'
import FAQPage from './faq/page'
import Footer from '@/components/layout/Footer'


export default function Home() {
    return (
      <main>
        <Hero />
        <FeaturesPage />
        <FAQPage />
        <Footer />
      </main>
    )
}



