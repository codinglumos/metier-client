import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getReactions } from "../../managers/ReactionManager"
import { deleteService, getServices, updateService } from "../../managers/ServicesManager"
import { getUsers } from "../../managers/UserManger"
import "./Services.css"

export const AllServices = ({searchServicesState}) => {

    const [services, setServices] = useState([])
    const [reactions, setReactions] = useState([])
    const navigate = useNavigate()
    const [filteredServices, setFiltered ] = useState ([])
    const localMetierUser = localStorage.getItem("metier_user")
    const metierUserObject = JSON.parse(localMetierUser)
    const [isChecked, setIsChecked] = useState(false)

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
            getReactions()
                .then((reactionsArray) => {
                    setReactions(reactionsArray)
                })
        }, []
    )

    useEffect(
        () => {
            const searchedServices = services.filter(service => 
                {return service?.service?.toLowerCase().includes(searchServicesState.toLowerCase())})      
           searchServicesState === "" ? setFiltered(services) :setFiltered(searchedServices)
        },
        [searchServicesState]
    )
    
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };

    const confirmDelete = (evt, service) => {
        let text = 'Are you sure you want to delete this service?'
        window.confirm(text)
            ? deleteService(service.id).then(() => {window.location.reload()})
            : <></>
    }

    const serviceEdit = (service) => {
        let text = 'Are you sure you want to edit this service?'
        window.confirm(text)
            ? navigate(`/services/${service.id}/edit`)
            : <></>
    }

    const servicesToPrint = searchServicesState != "" ? filteredServices : services
    
    return <article className="services">
        <h2 className="servicesHeader title is-3">All Services</h2>

        {
            servicesToPrint.map(
            (service) => {
                        return <React.Fragment key={`services--${service.id}`}>
                            <div className="columns box" id="services__serviceDetails">
                                <section className="serviceDetails column">
                                    <div className="service">Service: <Link className="servicelink" to={`/services/${service.id}`} >{service.service}</Link></div>
                                    <div className="creator has-text-left" key={`service--${service.id}`}>Creator: {service?.creator?.full_name}</div>
                                    <div className="date has-text-left" key={`service--${service.id}`}>Date Created: {service.publication_date}</div>
                                    <div className="reactions">
                                    {
                                        metierUserObject.customer
                                            ? <fieldset>
                                            <div className="form-group">
                                                <label htmlFor="reaction">Reaction:</label>
                                                {
                                                    reactions.map((reaction) =>{
                                                        return<>
                                                        <option value={`${reaction.id}`} key={`reaction--${reaction.id}`}>{reaction.reaction}</option>
                                                        <input
                                                            type="checkbox"
                                                            className="addReaction"
                                                            value={service.reactions}
                                                            checked={isChecked}
                                                            onChange={
                                                                () => {
                                                                    handleOnChange()
                                                                }
                                                            }
                                                            />
                                                        </>
                                                    }
                                                    )
                                                }
                                            </div>
                                        </fieldset>
                                            : <></>

                                    }
                                    </div>
                                </section>
                                <div className="delete_service">
                                    {
                                        metierUserObject.staff
                                            ? <button className="btn_delete-service button" onClick={(evt) => { confirmDelete(evt, service) }}>Delete</button>
                                            : ""

                                    }
                                </div>

                                <div className="edit_service">
                                    {
                                        metierUserObject.staff
                                            ? <button className="btn_edit-service button" onClick={() => { serviceEdit(service) }}>Edit</button>
                                            : <></>

                                    }
                                </div>
                            </div>

                        </React.Fragment>
                }

            )
        }
    </article >
}

