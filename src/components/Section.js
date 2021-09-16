import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';



export default function Section({
  title,
  description,
  leftbuttontext,
  rightbuttontext,
  backgroundimage,
}) {
  return (
    <Wrap bgImage={backgroundimage}>
    <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
        <ButtonGroup>
          <LeftButtons>{leftbuttontext}</LeftButtons>
          {rightbuttontext && /* && is a condition, if rightbuttontext exists then only show this button otherwise not. */ <RightButton>{rightbuttontext}</RightButton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src="./down-arrow.svg"></DownArrow>
        
      </Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model - s.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Button = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButtons = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButtons)`
  /* inherit the css of LeftButtons */
  background: #fff;
  opacity: 0.65;
  color: #000;
`;
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1s;
`;
