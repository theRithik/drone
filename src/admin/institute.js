import React,{Component} from "react";
// import {Link} from 'react-router-dom'
import './institute.css'
import Nav from '../nav';

const rurl = "http://localhost:5000/user/details"
const url = "http://localhost:5000/user/addCourse"
class Institute extends Component{
constructor(){
  super()
  this.state={
    droneCategory:'',
  }
}

handleClick=()=>{
  const id = document.getElementById('id').value
  const inst = document.getElementById('instName').value
  const course = document.getElementById('course').value
  const fees = document.getElementById('fees').value
  const state = document.getElementById('state').value
  const city = document.getElementById('city').value
  const address = document.getElementById('address').value
  const dateOr= document.getElementById('date').value
  const date = dateOr.split('-').reverse().join('-')
  const image = document.getElementById('image').value
  const courseDuration = document.getElementById('courseDuration').value
  const droneType = document.getElementById('droneType').value
    
  fetch(url,{
    method:'post',
    headers:{
      'accept':'application/json',
  'Content-Type':'application/json'
  },
    body:JSON.stringify({
      "id":id,
      "institute_name":inst,
      "course":course,
      "fees":fees,
      "state":state,
      "city":city,
      "address":address,
      "date":date,
      "image":image,
      "courseDuration":courseDuration,
      "droneType":droneType,
      "droneCategory":this.state.droneCategory

    })
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    if(data.status ===200){
      console.log('successfully added')
    }
    else{
      console.log('not addded')
    }
  })
}


handleChange=(e)=>{
  const id =document.getElementById('id').value
  console.log(id)
  if(id.length<2){
    console.log('must be 2 ')
  }else{
    if(id<50){
console.log('already taken')
    }
    else{
const idnum = id
console.log(idnum)
      fetch(rurl,{
        method:'POST',
        headers:{
            'accept':'application/json',
        'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "id":idnum
        })
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
       if(data.length===0){
    console.log('ok')
       }
       else{
        console.log('already taken')
       }
        
      })
    }
}
}

handleChange2=(e)=>{
 this.setState({droneCategory:e.target.value})
}

   render(){
    return(
      <>
      <Nav/>
      <div className="col-md-9" id='content' style={{display:'inline-block',marginTop:'80px'}}>
        <div className="container-fluid">
       <div className="card" style={{marginTop:'30px'}}>
        <div className="card-header">
          <h4 style={{textAlign:'center'}}>Add Course</h4>
        </div>
        <div className="Card-body" style={{marginTop:'10px',marginLeft:'20px', marginRight:'20px'}}>
        <div className="col-md-6" style={{display:'inline-block'}}>
        <label className="form-label">Unique Id</label>
          <input  style={{marginBottom:'10px'}} type="text" id="id" name="course" onChange={this.handleChange} className="form-control"/>
         
          <label className="form-label">Institute Name</label>
          <input style={{marginBottom:'10px'}} type="text" id="instName" name="institute_name" className="form-control"/>
          <label className="form-label">Course Name</label>
          <input  style={{marginBottom:'10px'}} type="text" id="course" name="course" className="form-control"/>
          <label className="form-label">Course Fees</label>
          <input  style={{marginBottom:'10px'}} type="text" id='fees' name="fees" className="form-control"/>
        <label className="form-label">State</label>
          <input  style={{marginBottom:'10px'}} type="text" id='state' name="state" className="form-control"/>
          <label className="form-label">Course Duration</label>
          <input  style={{marginBottom:'10px'}} type="text" id="courseDuration" name="courseDuration" className="form-control"/>
        
         </div>
        
        
        
          <div className="col-md-5" style={{display:'inline-block', marginLeft:'20px'}}>
          <label className="form-label">city</label>
          <input  style={{marginBottom:'10px'}} type="text" id="city" name="city" className="form-control"/>
          <label className="form-label">Address</label>
          <input  style={{marginBottom:'10px'}} type="text" id="address" name="address" className="form-control"/>
          <label className="form-label">Course Start Date</label>
          <input  style={{marginBottom:'10px'}} type="date" id="date" min={new Date().toISOString().split('T')[0]} name="startDate" className="form-control"/>
          
          <label className="form-label">Image</label>
          <input  style={{marginBottom:'10px'}} type="file"id="image"  name="image" className="form-control"/>
          
          <label className="form-label">Drone Type</label>
          <input  style={{marginBottom:'10px'}} type="text" id="droneType" name="DroneType" className="form-control"/>
          <label className="form-label">Drone Cateogory</label>
          <select class="form-select" id="dronCategory" onChange={this.handleChange2} aria-label="Default select example">
  <option defaultValue='please select one drone category'>please select one drone category</option>
  <option value="Small">Small</option>
  <option value="Medium">Medium</option>
  <option value="Large">Large</option>
</select>
         
          </div>
         
<button type="submit" style={{marginBottom:'20px',marginTop:'10px',width:'300px',marginLeft:'330px'}} onClick={this.handleClick} className="btn btn-primary">Submit</button>
        </div>
</div>
</div>

        </div>
       
      </>
    )
   }
}
export default Institute