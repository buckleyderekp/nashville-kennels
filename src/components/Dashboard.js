import React from "react"
import "./animal/Animal.css"
import "./location/Location.css"
import "./customer/Customer.css"
import "./employee/Employee.css"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import EmployeeList from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import CustomerList from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import AnimalList from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import "./Kennel.css"



export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <AnimalProvider>
            <CustomerProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <LocationList />
                        <AnimalList />
                        <CustomerList />
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </CustomerProvider>
        </AnimalProvider>


    </>
)