import styled from "styled-components";

// Styled component named StyledCard
const StyledPlayerCard = styled.div`
    background-color: ${props => props.bg === "white" ? "white" : "#fff2c9"};
    border: ${props => props.border === "2px solid #d0d4d7" ? "2px solid #d0d4d7" : "3px solid #ebda16"};
    border-radius: 5px;
    padding: 1rem;
    margin: 0 auto;
    max-width: 250px;
    text-align: center;
    img {
        border-radius: 50%;
    }
    button {
        height: 50px;
        width: 100%;
    }
`;

export default StyledPlayerCard