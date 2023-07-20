import React, { Component } from "react";
import './home.css'
import Nav from "./nav";
 import {Link} from 'react-router-dom'
const url = "http://localhost:5000/user"
class  Home extends Component{

  constructor(){
    super()
    this.state={
      card:'',
      card2:''
    }
  }

    handleChange=()=>{

    }
    handleClick2=()=>{

    }
  
handleClick=()=>{
document.getElementById("navbutton").classList.toggle("sideMenu")
document.getElementById('content').classList.toggle('Fullcontent')
}
searchBar=()=>{
  const value = document.getElementById('searchInput').value
  console.log(value)
}

renderData=(data)=>{
  if(data){
    if(data.length>0){
      return data.map((item)=>{
       return(
        <Link to={`/details/${item.id}`}  key={item.id}>
        <div className="card" id="homeCard"  style={{width:'17rem', height:'400px' }}>    
        <div className="card-header" style={{padding:'0'}}>
          <img src={item.display_image?item.display_image:"https://d33wubrfki0l68.cloudfront.net/9f04f9d75a9d338fe257f87ddc7d061066a1b975/34662/img/drone-pilot-training/banner.svg"} alt={item.meal_type} style={{width:'100%',height:'170px',borderRadius:'20px 20px 0 0', border:'1px solid transparent'}}/>
        </div>
        <div className="card-body" style={{textAlign:'center'}}>
            <div className="card-title" style={{height:'10px',width:'90%', textOverflow:'ellipsis'}}><h6>{item.institute_name}</h6></div>
            <p style={{marginTop:'60px'}} ><span className="cardPara"><svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'red',marginBottom:'5px'}} viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>  {item.state}</span></p>
           <h6> <span style={{color:'grey'}}>Course Fee</span> <span className="discount">{item.discount?item.discount:"₹32000"} </span> {item.fees?item.fees:'₹40000'}</h6>
            <span className="btn btn-primary" to={`/details/${item.id}`} style={{justifyContent:'center', textAlign:'center'}}>Details</span>
        </div>
        
    </div></Link>
       )
      })
    }
    else{
return(
  <h3>No data as per the filter</h3>
)
    }
  }
  else{
    return(
      <img src='https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif' alt='loader'/>
    )
  }
}
Filtering=(e)=>{
  const value = e.target.value
  const cardData = this.state.card
if(value.length>1){
  let data1 = cardData.filter((item)=>{
    return item.institute_name.toLowerCase().indexOf(value.toLowerCase())>-1
  })
  this.setState({card:data1})
  }
  else{
    this.setState({card:this.state.card2})
  }
}


location=(e)=>{
  const value = e.target.value
  const cardData = this.state.card
if(value.length>1){
  let data1 = cardData.filter((item)=>{
    return item.state.toLowerCase().indexOf(value.toLowerCase())>-1
  })
  this.setState({card:data1})
  }
  else{
    this.setState({card:this.state.card2})
  }
}



    render(){
return(
    <>
    <Nav/>
{/* //////////////////body content////////////////// */}
    <div className="col-md-9" id='content' style={{display:'inline-block',marginTop:'80px'}}>
       
                <div className="searchBar">
         <input type="text" className="form-control" onChange={this.Filtering} id='searchInput' style={{display:'inline-block'}} placeholder="keyword...."/>
         <input type="text" className="form-control" onChange={this.location} id='location' style={{display:'inline-block'}} placeholder="location..."/>
        <button className="btn btn-primary" style={{marginLeft:'10px', marginBottom:'7px'}} onClick={this.searchBar}><svg xmlns="http://www.w3.org/2000/svg" height="1em" style={{fill:'white'}} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>
            </div>
                    <div  style={{ marginTop:'10px',border:'2px solid grey',borderRadius:'20px',marginLeft:'60px',marginRight:'50px'}}>
                        
                            <h4 style={{textAlign:"center",marginTop:'5px',marginBottom:'10px'}}>Filters</h4>
                          <hr style={{marginLeft:'20%', marginRight:'20%',border:'1px solid',marginTop:'5px'}}/>
                         <div className="col-md-6" style={{display:'inline-block'}}>
                            <h6 className="filterName">Course Type</h6>
                            <form>
                         <div className="form-check form-switch" style={{marginLeft:'20px'}}>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' defaultChecked value='All' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>All</label>
                         </div>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' value='Small' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>Small</label>
                         </div>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' value='Medium' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>Medium</label>
                         </div>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' value='Large' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>Large</label>
                         </div>
                         </div>
                         </form>
                         </div>
                         
                         <div className="col-md-6" style={{display:'inline-block'}}>
                          
                         <h6 className="filterName">Drone Type</h6>
                         <div className="form-check form-switch" style={{marginLeft:'20px'}}>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' defaultChecked value='All' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>All</label>
                         </div>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' value='Small' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>Small</label>
                         </div>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' value='Medium' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>Medium</label>
                         </div>
                         <div className="cost-filter" style={{display:'inline-block'}}>
                         <input className="form-check-input" type="radio" name='check1' value='Large' onClick={this.handleClick2}    />
                         <label  className="form-check-label" style={{marginRight:'20px'}}>Large</label>
                         </div>
                         </div>

                         </div>

                    
                    </div>
                    <div id='cardColumn' >
                     
                      {this.renderData(this.state.card)}
                     
                    </div>
                    </div>
                    <div>
                    </div>
       
    </>
)
}
componentDidMount=()=>{
  fetch(url,{method:'GET'})
  .then((res)=>res.json())
  .then((data)=>{
    this.setState({card:data, card2:data})
  })
}
}
export default Home