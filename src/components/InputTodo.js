import React from 'react'
import { useState } from "react";
import {StyledInput, SaveButton} from "../style/styles";

export default function InputTodo({
    saveTodo
}) {
    const [inputValue, setInputValue] = useState("");

    const inputOnChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
             <div>
            <StyledInput value={inputValue} onChange={inputOnChange}/>
            <SaveButton onClick={()=>saveTodo(inputValue)}>Save</SaveButton>
        </div>
       
    )
}
