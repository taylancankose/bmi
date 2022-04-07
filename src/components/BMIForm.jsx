import {useContext, useEffect, useState} from 'react'
import imaj from '../assets/bmi-calc.jpg'
import { Link, useNavigate } from 'react-router-dom'
import BMIContext from '../context/BMIContext'
 

function BMIForm() {
  const navigate = useNavigate()

  const {formData,handleChangeAge,handleChangeHeight,handleChangeWeight,handleChangeName} = useContext(BMIContext)

  const {name,age,height,weight}= formData
  console.log("formData bu ", formData)

  const [userData, setUserData] = useState(formData)
  console.log("sa", userData)

  
const handleStorage = () => {
  localStorage.setItem('formData', JSON.stringify(formData));
  JSON.parse(localStorage.getItem('formData'));
}

useEffect(() => {
  handleStorage()
}, [formData])


  useEffect(() => {
    setUserData(formData)
  },[formData])

  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-md-6 p-0 mt-6">
          <img src={imaj} alt="" height='500px'  />
        </div>
        <div className="col-md-6 p-0">
         <form className='align-items-center justify-content-center mx-auto mt-5' onSubmit={() => navigate('/results')}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
              <input type="text" 
              className="form-control" 
              id="exampleInputPassword1" 
              onChange={handleChangeName} 
              value={name}
              placeholder='John Doe'
              />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
            <input type="number" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder='25' 
            value={age}
            onChange={handleChangeAge} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Weight</label>
            <input type="number" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            onChange={handleChangeWeight} 
            value={weight}
            placeholder='75 kg' 
            />
          </div>
            <div id="emailHelp" className="form-text">Unit of the weight must be kilograms.</div>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Height</label>
            <input type="number" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            onChange={handleChangeHeight} 
            value={height}
            placeholder='186 cm' 
            />
            <div id="emailHelp" className="form-text">Unit of the height must be centimeters.</div>
            <button type='button' className='btn btn-primary mt-3 mx-auto d-flex px-5 my-4 justify-content-center align-items-center' onClick={() => navigate('/results')} disabled={height === '' || weight===''}>Calculate</button>
          </div>
      </form>
      </div>
    </div>
  </div>
  )
}

export default BMIForm