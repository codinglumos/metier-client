import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getServices, deleteService } from "../../managers/ServicesManager"
import { getUsers } from "../../managers/UserManger"
import "./Services.css"

export const MyServices = () => {

    const [services, setServices] = useState([])
    const [filteredServices, setFilteredservices] = useState([])
    const [allUsers, setUsers] = useState([])

    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)

    const navigate = useNavigate()

    useEffect(
        () => {
            getServices()
                .then((servicesArray) => {
                    setServices(servicesArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const myServices = services.filter(service => service.user_id === metierUserObject.id)
            setFilteredservices(myServices)
        },
        [services]
    )


    useEffect(
        () => {
            getUsers()
                .then((usersArray) => {
                    setUsers(usersArray)
                })
        }, []
    )
 
    const serviceEdit = (service) => {
        let text = 'Are you sure you want to edit this service?'
        window.confirm(text)
            ? navigate(`/services/${service.id}/edit`)
            : <></>
    }

    const confirmDelete = (filteredService) => {
        let text = 'Are you sure you want to delete'
        // whenever confirmed by clicking OK/Cancel window.confirm() returns boolean 
        window.confirm(text)
            ? deleteService(filteredService.id).then(() => navigate("/services"))
            : <></>
    }

    return <article className="services">
        <h2 className="servicesHeader title is-3">{metierUserObject.username}'s Services: </h2>
        {
            filteredServices.map(
                (filteredService) => {
                        return <>
                            <div className=" columns box" id="service__myService">
                                <section className="serviceDetails column" key={`service--${filteredService.id}`}>
                                    <div className="myservices">Service: {filteredServices.service}</div>
                                    <div className="creator has-text-left" key={`service--${filteredService.id}`}>Creator: {user.full_name}</div>
                                    <div className="date has-text-left" key={`filteredService--${filteredService.id}`}>Date Created: {filteredService.publication_date}</div>
                                    <div className="body" >Information: {filteredService.body}</div>
                                    <footer className="serviceFooter has-text-left" >Date: {filteredService.publication_date}</footer>
                                </section>
                                <footer className="cardButtons">
                                <button className="btn_edit-service button" onClick={() => { serviceEdit(filteredService) }}>Edit</button>
                                    <button className="btn_delete-service " key={`service-${filteredService.id}`} onClick={(evt) => { confirmDelete(evt, filteredService) }}>Delete</button>
                                </footer>
                            </div>
                        </>
                }
            )
        }
    </article>
}