import { useState } from "react"

export const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);
    
    const onChange = (e) => {
        setValue(e.target.value);
    }
    // return [value, handleChange];
    return {
        value, 
        onChange}
}