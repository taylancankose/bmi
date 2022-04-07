import {useState, createContext, useEffect} from 'react'

const BMIContext = createContext();

export const BMIProvider = ({children}) => {
const [formData, setFormData] = useState({
    name: '',
    age:'',
    weight:'' ,
    height: '',
    result: '',
})
const [localData, setLocalData] = useState([])

const handleChangeName = e => {
    e.persist()
    setFormData((prevState) => ({
        ...prevState,
        name: e.target.value
    }))
}

const handleChangeAge = e => {
    e.persist()
    setFormData((prevState) => ({
        ...prevState,
        age: e.target.value
    }))
}

const handleChangeWeight = e => {
    e.persist()
    setFormData((prevState) => ({
        ...prevState,
        weight: e.target.value
    }))
}

const handleChangeHeight = e => {
    e.persist()
    setFormData((prevState) => ({
        ...prevState,
        height: e.target.value
    }))
}

    return <BMIContext.Provider 
    value={{ 
        formData, setFormData,
        handleChangeAge,
        handleChangeHeight,
        handleChangeWeight,
        handleChangeName,
    }}
    >
        {children}
    </BMIContext.Provider>
}

export default BMIContext