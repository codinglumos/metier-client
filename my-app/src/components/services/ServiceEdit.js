import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { createService, getServices, getServiceById, updateService } from '../../managers/ServiceManager.js'


export const UpdateService = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState([])
 
    const [newService, setNewService] = useState({
        service: "",
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

      const updatedService = (evt) => {
        evt.preventDefault()

        
        return editService(newService)
        .then(() => navigate(`/services`))
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
            <button onClick={(evt) => updatedService(evt)} className="btn btn-primary">
                Update Service
            </button>
        </form>
    )
}