import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getServiceById, updateService } from '../../managers/ServicesManager'


export const UpdateService = () => {
    const navigate = useNavigate()
    const { serviceId } = useParams()
 
    const [newService, setNewService] = useState({
        id: 0,
        service: "",
        body: "",
        image: "",
        price: 0
    })

    useEffect(() => {
        
        getServiceById(serviceId)
        .then(setNewService)
            
    }, [serviceId]
    )

    const changeServiceState = (evt) => {
        const copy = {...newService}
        const propertyToChange = evt.target.id
        copy[propertyToChange] = evt.target.value
        setNewService(copy)
    }
 
    return (
        <form className="serviceForm">
        <h2 className="serviceForm__service"></h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="service">Update Artwork Title: </label>
                <input type="text" id="service" required autoFocus className="form-control"
                    value={newService.service}
                    onChange={changeServiceState}
                />
            </div>
            </fieldset>
            
            <fieldset>
            <div className="form-group">
                <label htmlFor="image">Update Image: </label>
                <input key={`service--${newService.image}`} type="text" id="image" required autoFocus className="form-control"
                    value={newService.image}
                    onChange={changeServiceState}
                />
            </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Update Price: </label>
                    <input key={`service--${newService.price}`} type="number" id="price" required autoFocus className="form-control"
                        value={newService.price}
                        onChange={changeServiceState}
                    />
                </div>
                </fieldset>

                <fieldset>
                <div className="form-group">
                    <label htmlFor="body">Update information about your artwork here... </label>
                    <input key={`service--${newService.body}`} type="text" id="body" required autoFocus className="form-control"
                        value={newService.body}
                        onChange={changeServiceState}
                    />
                </div>
            </fieldset>
            <button type="submit"
            
            onClick={evt => {
             evt.preventDefault()
             window.alert("Service has been updated.")

             const serviceDone = {
                    id: newService.id,
                    service: newService.service,
                    body: newService.body,
                    image: newService.image,
                    price: newService.price
             }
                
                updateService(serviceDone)
                .then(() => navigate("/services"))
            }}
            className="btn btn-primary">
                Update Artwork
            </button>
        </form>
    )
}