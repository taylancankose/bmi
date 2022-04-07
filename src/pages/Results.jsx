import { useContext, useState, useEffect } from 'react';
import BMIContext from '../context/BMIContext';
import BMIResult from '../data/BMIResult'
import bmi from '../assets/bmi-result.jpg'
import {Link, useNavigate} from 'react-router-dom'



function Results() {
 const navigate = useNavigate()
 const {formData} = useContext(BMIContext);
 console.log("fo", formData)

 const BMI = (formData.weight/(formData.height*formData.height)*10000).toFixed(2)
 console.log(BMI)

if(formData.age >= 18 & formData.age <= 24){
    if(BMI >= 19 & BMI <= 24){
        formData.result = 'Healthy'
    }else if(BMI < 19){
        formData.result = 'Underweight'
    }else if(BMI > 24){
        formData.result = 'Overweight'
    }
}

if(formData.age >= 25 & formData.age <= 34){
    if(BMI >= 20 & BMI <= 25){
        formData.result = 'Healthy'
    }else if(BMI < 20){
        formData.result = 'Underweight'
    }else if(BMI > 25){
        formData.result = 'Overweight'
    }
}

if(formData.age >= 35 & formData.age <= 44){
    if(BMI >= 21 & BMI <= 26){
        formData.result = 'Healthy'
    }else if(BMI < 21){
        formData.result = 'Underweight'
    }else if(BMI > 26){
        formData.result = 'Overweight'
    }
}

if(formData.age >= 45 & formData.age <= 54){
    if(BMI >= 22 & BMI <= 27){
        formData.result = 'Healthy'
    }else if(BMI < 22){
        formData.result = 'Underweight'
    }else if(BMI > 27){
        formData.result = 'Overweight'
    }
}

if(formData.age >= 54 & formData.age <= 64){
    if(BMI >= 23 & BMI <= 28){
        formData.result = 'Healthy'
    }else if(BMI < 23){
        formData.result = 'Underweight'
    }else if(BMI > 28){
        formData.result = 'Overweight'
    }
}

if(formData.age >= 65){
    if(BMI >= 24 & BMI <= 29){
        formData.result = 'Healthy'
    }else if(BMI < 24){
        formData.result = 'Underweight'
    }else if(BMI > 29){
        formData.result = 'Overweight'
    }
}

 if(BMI >30){
    formData.result = 'Obese'
}

  return (
    <div className="container">
    <Link to='/' className='btn btn-primary mt-4'>Back to Home</Link>
    <div className="col-12">
        <img className='img-fluid align-items-center justify-content-center mx-auto d-flex w-75 p-3' src={bmi} alt="" />
    </div>
    <div className="row mx-auto my-auto text-center d-flex align-items-center justify-content-center">
            <h4 className='text-center'>Hello {formData.name}!</h4> 
            <h3 className='text-center'>Your body index calculated as: <span className='text-primary'>{BMI}</span></h3> 
            {
                formData.result != '' 
                ? <h3 > You are <span 
                className={'badge ' 
                + 
                `${formData.result === 'Healthy' 
                ? 'bg-success' 
                : formData.result === 'Underweight' 
                ? 'bg-info' 
                : formData.result === 'Overweight'
                ? 'bg-warning'
                : formData.result === 'Obese'
                ? 'bg-danger'
                : null
            }`}> {formData?.result}! </span></h3>
                : <p>yok</p>
            }
            <div className='d-flex mx-auto justify-content-center align-items-center mt-3'>
            {
                formData.result != '' 
                ? <button onClick = {() => navigate('/diets')}
                className={'btn diet text-white fw-bolder ' 
                + 
                `${formData.result === 'Healthy' 
                ? 'btn-success' 
                : formData.result === 'Underweight' 
                ? 'btn-info' 
                : formData.result === 'Overweight'
                ? 'btn-warning'
                : formData.result === 'Obese'
                ? 'btn-danger'
                : null
                }`}> Diet for {formData?.result}! </button>
                : null
            }
            {console.log(formData.result)}
        </div>
        </div>
</div>
  )
}

export default Results