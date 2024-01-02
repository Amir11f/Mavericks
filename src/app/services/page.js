import { ServicesHeader } from "@/components/Services/servicesHeader"
import { ServiceBoxs } from "@/components/Services/serviceBoxs"

export default function Services(){


    return(
        <>
            <div className="flex flex-col h-[90rem]">
                <ServicesHeader/>
                <ServiceBoxs/>
            </div>
        </>
    )
}