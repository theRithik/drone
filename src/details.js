import React, { Component } from "react";
import Nav from "./nav";
import './details.css'

const url = "http://localhost:5000/user/details"

class Details extends Component{
    constructor(){
        super()
        this.state={
            details:'',
            coursePrice:'',
            oldPrice:'',
            stateName:'',
            droneType:'',
            startDate:'',
            trainerData:'',
            refund:''
        }
    }

    handleRender=(data)=>{
        if(data){
           return data.map((item)=>{
            return(
              <div class="card" style={{width: '400px',marginBottom:'20px'}}>
              <img src={item.image?item.image:'https://d33wubrfki0l68.cloudfront.net/9f04f9d75a9d338fe257f87ddc7d061066a1b975/34662/img/drone-pilot-training/banner.svg'} style={{width:'400px',borderRadius:'5px 5px 5px 0'}}  className="img-fluid rounded-start" alt="institute"/>
              <div class="card-body">
                <h5 class="card-title">{item.institute_name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            )
           })
        }


    }

    Trainers=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <div className="card" key={item.id} style={{borderRadius:'10px'}}>
                    <div className="card-body">
                        <span className="row">
                               <div className="col-md-2">    <img style={{width:'70px', borderRadius:'10px',margin:'10px 10px 20px 5px',display:'inline-block'}} src={item.tIamge?item.traninerImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'} alt="profile pic"/></div>
            <span className="col-md-9" style={{marginLeft:'10px'}}>
                <div className="col-md-2"><h5 style={{display:'inline-block',marginBottom:'0'}}>{item.tName}</h5><p style={{ fontSize:'12px',color:'gray', margin:'0'}}>{item.tcategory}</p></div>
            <div className="col-md-8" style={{display:'inline-block'}}>
            <p style={{color:'grey', margin:'0', fontSize:'12px'}}>{item.texperience}</p>
            </div></span>
            </span>
            <p></p>
            </div>
           </div>
                )
            })
        }

    }

    Refund=(data)=>{

    }

    render(){
        return(
            <>
            <Nav/>
           <div className="col-md-9" id='content' style={{display:'inline-block',marginTop:'80px'}}>
            <div className="container-fluid" style={{marginTop:'20px',marginBottom:'20px'}}>
              <div className="col-md-6">
{this.handleRender(this.state.details)}
              </div>
        
        
        <div className="row">
            <div className="col-md-6" style={{marginRight:'50px',marginLeft:'10px'}}>
            <h3>Course Details</h3>
            <div className="row">
            <div className="col-md-6">
                <ul className="navbar-nav">
                    <li className="nav-item listing">
                     <span style={{display:'inline-block'}} > <span className="courseImg" > <svg xmlns="http://www.w3.org/2000/svg" style={{fill:'blue'}}  height="23px" viewBox="0 0 512 512"><path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
                       </span>
                       
                       <p className="text-body-secondary" style={{display:'inline-block', position:'relative',bottom:'10px', left:'5px', fontSize:'12px'}} >Course Type</p>
                       <h6 style={{position:'relative' ,bottom:'25px',left:'48px', fontSize:'12'}} >Beginners</h6>
                       </span> 
                    </li>
                    <li className="nav-item listing">
                     <span style={{display:'inline-block'}} > <span className="courseImg" ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M160 0c13.3 0 24 10.7 24 24V64H328V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192 144 128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24zM432 192H80V448c0 8.8 7.2 16 16 16H416c8.8 0 16-7.2 16-16V192zM328 352H184c-13.3 0-24-10.7-24-24s10.7-24 24-24H328c13.3 0 24 10.7 24 24s-10.7 24-24 24z"/></svg>
                       </span>
                       
                       <p className="text-body-secondary" style={{display:'inline-block', position:'relative',bottom:'10px', left:'5px', fontSize:'12px'}} >Course Start Date</p>
                       <h6 style={{position:'relative' ,bottom:'25px',left:'48px', fontSize:'12'}} >{this.state.startDate}</h6>
                       </span> 
                    </li>
                    <li className="nav-item listing">
                     <span style={{display:'inline-block'}} > <span className="courseImg" > <img style={{width:'20px'}} src="https://cdn-icons-png.flaticon.com/128/974/974510.png" alt='drone'/>
                       </span>
                       
                       <p className="text-body-secondary" style={{display:'inline-block', position:'relative',bottom:'10px', left:'5px', fontSize:'12px'}} >Drone Type</p>
                       <h6 style={{position:'relative' ,bottom:'25px',left:'48px', fontSize:'12'}} >{this.state.droneType}</h6>
                       </span> 
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <ul className="navbar-nav">
                <li className="nav-item listing">
                     <span style={{display:'inline-block'}} > <span className="courseImg" > <svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'red',marginBottom:'5px'}} viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                       </span>
                       
                       <p className="text-body-secondary" style={{display:'inline-block', position:'relative',bottom:'10px', left:'5px', fontSize:'12px'}} >location</p>
                       <h6 style={{position:'relative' ,bottom:'25px',left:'38px', fontSize:'12'}} >{this.state.stateName}</h6>
                       </span> 
                    </li>
                    <li className="nav-item listing">
                     <span style={{display:'inline-block'}} > <span className="courseImg" > <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                       </span>
                       
                       <p className="text-body-secondary" style={{display:'inline-block', position:'relative',bottom:'10px', left:'5px', fontSize:'12px'}} >Course Duration</p>
                       <h6 style={{position:'relative' ,bottom:'25px',left:'40px', fontSize:'12'}} >{this.state.duration}</h6>
                       </span> 
                    </li>
                    <li className="nav-item listing">
                     <span style={{display:'inline-block'}} > <span className="courseImg" > <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"/></svg>
                       </span>
                       
                       <p className="text-body-secondary" style={{display:'inline-block', position:'relative',bottom:'10px', left:'5px', fontSize:'12px'}} >Drone Category</p>
                       <h6 style={{position:'relative' ,bottom:'25px',left:'48px', fontSize:'12'}} >{this.state.droneCategory}</h6>
                       </span> 
                    </li>
                </ul>
            </div>
            </div>
            <div style={{marginTop:'50px',marginLeft:'10px'}}>
<h4>Course Eligibility/Requirements</h4>
<ol style={{color:'grey', marginTop:'10px'}}>
    <li style={{paddingBottom:'3px'}}>Age - 18 to 65 years</li>
    <li  style={{paddingBottom:'3px'}}>10th Pass Certificate</li>
    <li style={{paddingBottom:'3px'}}>Valid Indian Passport</li>
    <li style={{paddingBottom:'3px'}}>Medical Fitness Certificate</li>
    <li style={{paddingBottom:'3px'}}>Aadhar card linked with mobile number</li>
</ol>
</div>
<h4 style={{marginTop:'50px', marginLeft:'10px',marginBottom:'20px'}}>Who should get this course</h4>
<span className="reqTabs">Beginners pilot</span>
<span className="reqTabs">Experienced Pilot</span>
<span className="reqTabs">Students</span>
<span className="reqTabs">Content Creators</span>
<span className="reqTabs">Technicians</span>
<span className="reqTabs">Hobbyist</span>
{/* /////////////////////////////////trainer Details///////////// */}
<div style={{marginTop:'20px'}}>
    <h4>Course Trainers</h4>
    {this.Trainers(this.state.trainerData)}

</div>
{/* ///////////////////refund policy///////////// */}
<div style={{marginTop:'20px',marginBottom:'20px'}}>
    <h4>Refund Policy</h4>
    
    {this.Refund(this.state.refund)}

</div>

            </div>
            {/* ////////////////////////enquire tab//////////////// */}
            <div className="col-md-5" style={{border:'1px solid grey', borderRadius:'10px'}}>
                <div className="formdetails" style={{marginTop:'40px', marginLeft:'15px'}}>
                    <h4 style={{color:'gray'}}>Course Fee</h4>
            <h2><span className="discount2">₹32000 </span>{this.state.coursePrice}<span className="discount2" style={{textDecoration:'none'}}>(GST.inc)</span></h2>
           <h5 style={{color:'grey', marginTop:'20px'}}>Book this course for just</h5>
           <h2>₹ 399<span className="discount2" style={{textDecoration:'none'}}>Advance Payment</span></h2>
           <p style={{color:'grey', fontSize:'14px'}}>Remaining amount will be paid by the student to the training institute before the course starts</p>
           <form action="" method="post" style={{marginTop:'30px'}}>
            <label style={{fontWeight:'500'}}>Name*</label>
            <p style={{color:'grey',margin:'0',fontSize:'12px'}}>As mentioned in your identity proof</p>
            <input type='text' name="name" className="form-control" style={{marginBottom:'30px'}} placeholder="Name..."/>
            <label style={{fontWeight:'500'}}>Phone*</label>
            <p style={{color:'grey',margin:'0',fontSize:'12px'}}>our course expects will call to this number</p>
            <input type="text" name="phone" className="form-control" style={{marginBottom:'30px'}} placeholder="Number..."/>
            <label style={{fontWeight:'500'}}>Email*</label>
            <p style={{color:'grey',margin:'0',fontSize:'12px'}}>As mentioned in your identity proof</p>
            <input type="email" name="email" className="form-control" style={{marginBottom:'30px'}} placeholder="Email..."/>
            <div class="form-check d-flex">
  <input type="checkbox" id="flexCheckDefault" style={{display:'inline-block'}}/>
  <label class="form-check-label" style={{display:'inline-block', fontSize:'12px'}}>
  I agree to the Terms & Conditions and confirm that I am above 18 years of age capable of entering into a valid contract under the laws of India.
  </label>
  </div>
  <div class="form-check d-flex " style={{marginTop:'10px'}}>
  <input type="checkbox" id="flexCheckDefault" style={{display:'inline-block'}}/>
  <label class="form-check-label" style={{display:'inline-block', fontSize:'12px'}}>
  I agree to Course Rescheduling by the Training Institute due to unforseen circumstances. Learn More
  </label>
  </div>

  <button type="submit" className="btn btn-primary" style={{marginTop:'30px',marginBottom:'10px',width:'80%', marginLeft:'25px'}}>Enroll for this Course</button>
</form>
            </div>

            </div>

        </div>
 {/* ///////////////////////////////////////syllabus accordian///////////////// */}
        <div >
            <h4 style={{marginLeft:'10px'}}>What you will learn</h4>
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <h6>Accordion Item #1</h6>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <h6>Accordion Item #2</h6>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <h6>Accordion Item #3</h6>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
        </div>
{/* /////////////////////carousel///////////////////// */}
<div style={{marginTop:'50px', marginLeft:'10px'}}>
    <h4 style={{marginBottom:'20px'}}>Photo Galary</h4>

<div id="carouselExampleIndicators" class="carousel slide" style={{width:'300px',height:'200px'}} >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner"  >
    <div class="carousel-item active">
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s" class="d-block w-100  " alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src="https://images.unsplash.com/photo-1604093882750-3ed498f3178b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tk4YN315aRfpZy33HA_wAwmY7adeftUy_-DwjBgCKw&s" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        {this.carolseRender}
        </div>
        {/* ////////////////////carousel-end/////////////////////////////// */}
        </div>
        </div>
          
            </>
        )
    }
    componentDidMount=()=>{
        const id = this.props.match.params.id
         fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "id":id
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({details:data})
            const state=  data[0].state
            this.setState({startDate:data[0].startDate})
            this.setState({stateName:state})
            
            if(data[0].fees<data.old){
              
                this.setState({oldPrice:data[0].oldPrice})
            }
            else{
                this.setState({coursePrice:data[0].fees})
               
            }
            

        })
    }
}
export default Details