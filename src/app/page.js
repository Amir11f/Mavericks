// import Image from 'next/image'
import Header from '@/components/Home/header'
import Samples from '@/components/Home/samples'
import Services from '@/components/Home/services'
import { ContactWithUs } from '@/components/Home/contactWithCounsllor'
import { ClientsOpinion } from '@/components/Home/clientsOpinion'

export default function HomePage() {

    return(
            <div className='flex flex-col overflow-hidden'>
                <Header/>
                <Samples/>
                <Services/>
                <ContactWithUs/>
                <ClientsOpinion/>
            </div> 
    )
 
}
