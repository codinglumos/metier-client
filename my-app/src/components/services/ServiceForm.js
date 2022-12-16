import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createService, getUsers, getServices } from '../../managers/ServicesManager'


export const ServiceForm = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    //const [serviceTypes, setServiceTypes] = useState([])
    //const [users, setUsers] = useState([])
   
    const [newService, setNewService] = useState({
        service: "",
        publication_date: "",
        body: "",
        image: "",
        price: 0
    })

    const newDate = new Date()
    const month = newDate.getUTCMonth() + 1
    const date = newDate.getUTCDate()
    const year = newDate.getUTCFullYear()
    const formatDate = date.toLocaleString('en-us', {
        minimumIntegerDigits: 2
    })
    const formatMonth = month.toLocaleString('en-us', {
        minimumIntegerDigits: 2
    })
    const today = year + "-" + formatMonth + "-" + formatDate

    useEffect(() => {
        
        getServices()
        .then((serviceArray) => {
            setServices(serviceArray)
        })
            
    }, []
    )

      const changeServiceState = (evt) => {
        evt.preventDefault()

        const serviceToAPI = {
                service: newService.service,
                body: newService.body,
                publication_date: today,
                image: newService.image,
                price: newService.price 
                       
        }
        
        return createService(serviceToAPI)
            .then(() => {
               navigate("/services")
            })
    }
        

    return (
        <form className="serviceForm">
            <h2 className="serviceForm__service"></h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="service">Artwork Title:</label>
                    <input type="text" name="service" required autoFocus className="form-control"
                        value={newService.service}
                        onChange={
                            (evt) => {
                            const copy = structuredClone(newService)
                            copy.service = evt.target.value
                            setNewService(copy)
                        }}
                    />
                </div>
                </fieldset>
                
                <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image: </label>
                    <input type="text" name="image" required autoFocus className="form-control"
                        value={newService.image}
                        onChange={
                            (evt) => {
                            const copy = structuredClone(newService)
                            copy.image = evt.target.value
                            setNewService(copy)
                        }}
                    />
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" required autoFocus className="form-control"
                        value={newService.price}
                        onChange={(evt) => {
                            const copy = structuredClone(newService)
                            copy.price = evt.target.value
                            setNewService(copy)
                        }}
                    />
                </div>
                </fieldset>

                <fieldset>
                <div className="form-group">
                    <label htmlFor="body">Tell us about your art here... </label>
                    <input type="text" name="body" required autoFocus className="form-control"
                        value={newService.body}
                        onChange={(evt) => {
                            const copy = structuredClone(newService)
                            copy.body = evt.target.value
                            setNewService(copy)
                        }}
                    />
                </div>
            </fieldset>


            <button onClick={changeServiceState} className="btn btn-primary">
                Submit Service
            </button>
        </form>
    )
}