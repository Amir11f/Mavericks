// import Image from 'next/image'
import Header from '@/components/Home/header'
import Samples from '@/components/Home/samples'
import Services from '@/components/Home/services'
import { ContactWithUs } from '@/components/Home/contactWithCounsllor'

export default function HomePage() {

    return(
        <>
            <div className='flex flex-col'>
                <Header/>
                <Samples/>
                <Services/>
                <ContactWithUs/>
            </div>
        </>
        
    )
 
}
