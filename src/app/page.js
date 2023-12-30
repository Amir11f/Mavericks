// import Image from 'next/image'
import Header from '@/components/Home/header'
import Samples from '@/components/Home/samples'
import Services from '@/components/Home/services'

export default function HomePage() {

    return(
        <>
            <div className='flex flex-col'>
                <Header/>
                <Samples/>
                <Services/>
            </div>
        </>
        
    )
 
}
