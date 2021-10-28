import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';


export const StyledInput = styled.input.attrs({
    type:"input"
})`
    border-color: ${({value})=> value.length > 5 ? 'green' : 'red'};
    outline:none;

`;

export const TodoItem = styled.span`
    text-decoration: ${({isDone})=> (isDone ? "line-through" : "none")}
`;

export const SaveButton = styled.button`
background:palevioletred;
color:white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;

`;

export const DeleteButton = styled.button`
background:white
color:palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;

`;


export const GlobalStyle = createGlobalStyle`

    *{
            font-size:1rem;
    }
`;