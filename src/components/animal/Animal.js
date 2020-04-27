import React from "react"

export const Animal = ({ animal, customer, location }) => {
    console.log(animal, customer, location)
    return (
        <section className="animal">
            <div className="animal__location">Location: {location.name}</div>
            <div className="animal__owner">Customer: {customer.name}</div>
        </section>
    )
}