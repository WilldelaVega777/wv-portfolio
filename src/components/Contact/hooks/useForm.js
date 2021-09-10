//--------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------
import { useState }     from 'react'


//--------------------------------------------------------------
// Hook Definition Section
//--------------------------------------------------------------
export const useForm = (initialFValues) =>
{
    const [values, setValues] = useState(initialFValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}
