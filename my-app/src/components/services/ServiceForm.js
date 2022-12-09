import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createService, getServiceTypes, getUsers, getServices } from '../../managers/ServicesManager'


export const ServiceForm = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    const [serviceTypes, setServiceTypes] = useState([])
    //const [users, setUsers] = useState([])
   
    const [newService, setNewService] = useState({
        service: "",
        publication_date: Date.now(),
        body: "",
        image: "",
        price: 0
    })

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
                publication_date: newService.publication_date,
                body: newService.body,
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
                    <label htmlFor="service">Service: </label>
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
                {/* <fieldset>
                <div className="select">
                    <label className="servicetypes" htmlFor="servicetypes">Service Type:</label>
                    <select  placeholder="Choose Service Type" className="form-control" id="servicetypes" value={newService.serviceTypeId}
                        onChange={(evt) => {
                        const copy = structuredClone(newService)
                        copy.serviceTypeId = evt.target.value
                        setNewService(copy)
                        }}>
                    <option value={serviceTypes}></option>
                            {
                     serviceTypes.map(servicetype => {
                     return <option className="select option" value={servicetype.id} key={`servicetype--${servicetype.id}`}>{servicetype.label}</option>
                        })
                    }
                </select>
                </div>
            </fieldset> */}
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
                    <label htmlFor="body">Tell us about your service here... </label>
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

            {/* TODO: create the rest of the input fields */}

            <button onClick={changeServiceState} className="btn btn-primary">
                Submit Service
            </button>
        </form>
    )
}