// import Image from 'next/image'
import Header from '@/components/Home/header'
import Samples from '@/components/Home/samples'


export default function HomePage() {

    return(
        <>
            <div>
                <Header/>
                {/* <div className='absolute top-[660px]'> */}
                   <Samples/>
                {/* </div> */}
            </div>
        </>
        
    )
 
}
