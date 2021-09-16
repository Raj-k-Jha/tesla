import React from 'react'
import styled from 'styled-components'
import Section from './Section'


export const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundimage= "model-s.jpg"
                leftbuttontext="Custom Order"
                rightbuttontext='Existing invetory'
            />
            <Section
                  title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundimage= "model-x.jpg"
                leftbuttontext="Custom Order"
                rightbuttontext='Existing invetory'
            />
            <Section
                  title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundimage= "model-3.jpg"
                leftbuttontext="Custom Order"
                rightbuttontext='Existing invetory'
            />
            <Section
                  title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundimage= "model-y.jpg"
                leftbuttontext="Custom Order"
                rightbuttontext='Existing invetory'
            />
            <Section
                  title='Lowest Cost Solar Panel in India'
                description='Money-back Guarantee'
                backgroundimage= "solar-panel.jpg"
                leftbuttontext="Order Now"
                rightbuttontext='Learn More'
            />
            <Section
                  title='Solar for New Roofs'
                description='Solar ROOF Costs Less Than a New Roof Plus Solar Panels'
                backgroundimage= "solar-roof.jpg"
                leftbuttontext="Order Now"
                rightbuttontext='Learn More'
            />
            <Section
                 title='Accessories'
                description=''
                backgroundimage= "accessories.jpg"
                leftbuttontext="Shop Now"
             
            />
        </Container>
    )
}

// styled components allows us to style div in js
const Container = styled.div`
height:100vh;
`
