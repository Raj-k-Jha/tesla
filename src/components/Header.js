import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';


export const Header = () => {
    const [BurgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='tesla logo'/>
            </a>
            <Menu>
            {cars && cars.map((car,index) => (
                <a key={index} herf="#">{car}</a>

            ))}
           

            </Menu>
            <RightMenu>
            <a herf="#">Shop</a>
            <a herf="#">Tesla Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true) } />
            

            <BurgerNav show={BurgerStatus}>
            <CloseWrapper >
            <CustomClose onClick={() => setBurgerStatus(false) }/>
            </CloseWrapper>

            {cars && cars.map((car,index) => (
                <li key={index}><a href='#'>{car}</a></li>
            ))}
            <li><a href='#'>Roadster</a></li>
            <li><a href='#'>CyberTruck</a></li>
            <li><a href='#'>Ticket To Mars</a></li>
            <li><a href='#'>Elon is an alien!</a></li>
            <li><a href='#'>Illuminati</a></li>
            <li><a href='#'>SpaceX</a></li>
            <li><a href='#'>Mars 2030</a></li>
            <li><a href='#'>BlackHole 2100</a></li>
            <li><a href='#'>Recruitments </a></li>
            </BurgerNav>
            </RightMenu>
        </Container>
    )
}


const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
}
@media(max-width:786px)
{
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;

a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:#fff;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);

    a{
        font-weight:600;
    }
}

`

const CustomClose = styled(CloseIcon)   `
cursor:pointer;
`

const CloseWrapper = styled.div  `
display:flex;
justify-content:flex-end;
`