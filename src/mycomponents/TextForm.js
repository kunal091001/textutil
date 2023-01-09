import React,{useState} from 'react'

export default function TextForm(props) {

  const handleClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("text is converted to uppercase","success");
  }
  const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("text is converted to lowercase","success");
  }
  const handleOnchange = (event)=>{
    setText(event.target.value)  
  }
  const handleClearClick = ()=>{
    let newText="";
    setText(newText)
    props.showAlert("Textbox cleared","success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra spaces removed","success");
  }

  const [text, setText] = useState('enter text here');

  return ( 
    <>
<div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnchange}  style={{backgroundColor: props.mode==='light' ? 'white' : 'grey' , color : props.mode==='dark' ? 'white' : 'black'}} id="mybox " rows="8"></textarea>
</div>

<button className='btn btn-primary mx-2 my-2'  onClick={handleClick}>covert to uppercase</button>
<button className='btn btn-primary mx-2 my-2'  onClick={handleLoClick}>covert to lowercase</button>
<button className='btn btn-primary mx-2 my-2'  onClick={handleClearClick}>clear text</button>
<button className='btn btn-primary mx-2 my-2'  onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>
    <div className="container my-5" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
      <h1>your text summary</h1>
      <p>Your para has {text.length} characters and {text.split(" ").length} words</p>
      <div>
        <p>U Will Take  {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read All Text  </p>
      </div>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>  
    </>
  )
}