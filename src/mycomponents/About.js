import React, {useState} from 'react'
export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext,setBtnText] = useState("enable dark mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("enable light mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("enable dark mode")
        }
    }
  return (

    <div className="container" style={myStyle}>
        <h3>{props.heading}</h3>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is a sample react app</strong> this is textutils about . designed with custom dark mode other than screen . 
      </div>
    </div>
  </div>
</div>

<button onClick={toggleStyle} className="btn btn-primary" >{btntext}</button>
      
    </div>
  )
}

