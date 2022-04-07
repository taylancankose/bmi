import React from 'react'
import healthy from '../assets/healthy.jpg'
import { Link } from 'react-router-dom'

function BMI() {
  return (
    <section id="hero" class="d-flex align-items-center mt-5 py-5">

    <div class="container mt-5">
      <div class="row mt-5">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 className='text-success'>What is BMI?</h1>
          <p className='mt-3'>Body mass index (BMI) is a person’s weight in kilograms divided by the square of height in meters. BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, overweight, and obesity.</p>
          <p>BMI does not measure body fat directly, but BMI is moderately correlated with more direct measures of body fat. Furthermore, BMI appears to be as strongly correlated with various metabolic and disease outcome as are these more direct measures of body fatness.</p>
          <div class="d-flex">
            <Link to='/' class="btn btn-primary mt-3">Calculate My BMI</Link>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={healthy} class="img-fluid animated" alt="" />
        </div>
      </div>
    </div>

  </section>
  )
}

export default BMI