import React from "react"

export default ({ animal, customer, location }) => {
    console.log(animal, customer, location)
    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__location">Location: {location.name}</div>
            <div className="animal__owner">Customer: {customer.name}</div>
        </section>
    )
}