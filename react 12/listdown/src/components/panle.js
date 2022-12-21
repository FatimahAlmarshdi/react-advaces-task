import React, { useState } from "react"
import { addlocation, updateLocation } from "./api"

export const Panel = props => {
    let { location, placeholder, value, action } = props
    const [name, setName] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()

        action === "add"
            ? await addlocation(name, location.region_id)
                .then(res => console.log(res))
                .catch(err => console.error(err))

            : updateLocation(name, location.id)
                .then(res => console.log(res))
                .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={e => setName(e.target.value)}
                defaultValue={value}
                placeholder={placeholder}
            />
            <button>{action}</button>
        </form>
    )
}