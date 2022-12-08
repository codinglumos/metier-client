import { useState } from "react"
import { ServiceSearch } from "./SearchedServices"
import { AllServices } from "./ServiceList"


export const ServiceContainer = () => {
    const [searchServices, setSearchServices] = useState("")

    return <>
    <ServiceSearch setterFunction={setSearchServices}/>
    <AllServices searchServicesState={searchServices}/>
    </>
   
}