import React, { useContext } from 'react'
import BMIContext from '../context/BMIContext'
import DietLists from '../data/diets'
import healthy from '../assets/healthy.jpg'
import {Link} from 'react-router-dom'

function Diets() {
    const {formData} = useContext(BMIContext)
    console.log("diet", formData.result)
    console.log(DietLists[0])
  return (
    <div class="container mt-5 mx-auto">
        <Link to='/results' className='btn btn-primary mt-4'>Back to Results</Link>
        <img className='img-fluid align-items-center justify-content-center mx-auto d-flex w-50 ' src={healthy} alt="" />
    <div class="row d-flex justify-content-center">    
    {
            formData.result === 'Underweight' ?
            <>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Breakfast</h5>
                    <p class="card-text">{DietLists[0]?.Underweight.breakfast}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Dinner</h5>
                    <p class="card-text">{DietLists[0]?.Underweight.dinner}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Lunch</h5>
                    <p class="card-text">{DietLists[0]?.Underweight.lunch}</p>
                </div>
            </div>
            </>
            : formData.result === 'Healthy' ?
            <>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Breakfast</h5>
                    <p class="card-text">{DietLists[0]?.Healthy.breakfast}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Dinner</h5>
                    <p class="card-text">{DietLists[0]?.Healthy.dinner}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Lunch</h5>
                    <p class="card-text">{DietLists[0]?.Healthy.lunch}</p>
                </div>
            </div>
            </>
            : formData.result === 'Overweight' ?
            <>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Breakfast</h5>
                    <p class="card-text">{DietLists[0]?.Overweight.breakfast}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Dinner</h5>
                    <p class="card-text">{DietLists[0]?.Overweight.dinner}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Lunch</h5>
                    <p class="card-text">{DietLists[0]?.Overweight.lunch}</p>
                </div>
            </div>
            </>
            : formData.result === 'Obese' ?
            <>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Breakfast</h5>
                    <p class="card-text">{DietLists[0]?.Obese.breakfast}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Dinner</h5>
                    <p class="card-text">{DietLists[0]?.Obese.dinner}</p>
                </div>
            </div>
            <div class="card me-5" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Lunch</h5>
                    <p class="card-text">{DietLists[0]?.Obese.lunch}</p>
                </div>
            </div>
            </>
            : null
        }
     
</div>   
    </div>
  )
}

export default Diets