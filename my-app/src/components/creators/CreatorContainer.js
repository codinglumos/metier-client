import { useState } from "react"
import { CreatorSearch } from "./CreatorSearch"
import { CreatorList } from "./CreatorList"


export const CreatorContainer = () => {
    const [searchCreators, setSearchCreators] = useState("")

    return <>
    <CreatorSearch setterFunction={setSearchCreators}/>
    <CreatorList searchCreatorsState={searchCreators}/>
    </>
   
}