import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getCategories } from "../../managers/CategoryManager"
import { deleteservice, getservices } from "../../managers/servicesManger"
import { getUsers } from "../../managers/UserManager"
import "./services.css"

export const MyServices = () => {

    const [allServices, setAllservices] = useState([])
    const [filteredServices, setFilteredservices] = useState([])
    const [allUsers, setUsers] = useState([])
    const [dateSortedServices, setDateSortedServices] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getservices()
                .then((allServicesArray) => {
                    setAllservices(allServicesArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const myServices = allServices.filter(allService => allService.user_id === metierUserObject.id)
            setFilteredservices(myServices)
        },
        [allServices]
    )


    useEffect(
        () => {
            getUsers()
                .then((usersArray) => {
                    setUsers(usersArray)
                })
        }, []
    )

    useEffect(
        () => {
            const sortServices = filteredServices.sort((a, b) => (a.publication_date - b.publication_date) ? -1 : 1)
            setDateSortedServices(sortServices)
        }, [filteredServices]
    )

   
    const confirmDelete = (evt, dateSortedService) => {
        let text = 'Are you sure you want to delete'
        window.confirm(text)
            ? deleteService(dateSortedService.id).then(() => navigate("/services"))
            : <></>
    }

    return <article className="allServices">
        <h2 className="servicesHeader">{metierUserObject.username}'s Services: </h2>
        {
            dateSortedServices.map(
                (dateSortedService) => {
                    if (dateSortedService.category_id === categoryId || categoryId === 0)
                        return <>
                            <div className=" columns box" id="service__myService">
                                <section className="serviceDetails column" key={`service--${dateSortedService.id}`}>
                                    <div className="titleDiv"><Link className="" to={`/services/${dateSortedService.id}`}>Title: {dateSortedService.title}</Link></div>
                                    {
                                        allUsers.map((user) => {
                                            if (user.id === dateSortedService.user_id)
                                                return <div className="authorDiv has-text-left" key={`category--${user.id}`}>Author: {user.username}</div>
                                        })
                                    }
                                    <div className="contentDiv has-text-left" >Content: {dateSortedService.content}</div>
                                    <footer className="serviceFooter has-text-left" >Date: {dateSortedService.publication_date}</footer>
                                </section>
                                <footer className="cardButtons">
                                    <button>
                                        Edit Service
                                    </button>
                                    <button className="btn_delete-service " key={`service-${dateSortedService.id}`} onClick={(evt) => { confirmDelete(evt, dateSortedService) }}>Delete Service </button>
                                </footer>
                            </div>
                        </>
                }
            )
        }
    </article>
}