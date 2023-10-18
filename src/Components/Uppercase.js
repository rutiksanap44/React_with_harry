import React, { useState } from 'react'

export default function Uppercase(props) {

    const [changeColor, newColor] = useState({
        backgroundColor:'black',
        color:'white'
    })

    const [text,Newtext] = useState("This was text")
    
    
    function handleOnChange(event){
        Newtext(event.target.value)
    }
    function handleOnClick(){
        var upperCaseText = text.toUpperCase()
        Newtext(upperCaseText)
    }
    const toggleStyle = () =>{
        if(changeColor.backgroundColor==='white'){
            newColor({
                backgroundColor:'black',
                color:'white'
            })
        }
        else{
            newColor({
                backgroundColor:'white',
                color:'black'
            })
        }
    }

    const copyText = () => {
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpaces = () => {
        const newText = text.split(/[ ]+/)
        Newtext(newText.join(" "))
    }

    return (
        <div style={changeColor}>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <br></br>
                    <textarea className="form-control mx-2" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    <br></br>
                    <button type="button" className="btn btn-primary" onClick={handleOnClick}>Convert to Upper Case</button><br/>
                    <button type="button" className="btn btn-primary" onClick={toggleStyle}>ToggleColor</button>
                    <button type="button" className="btn btn-primary" onClick={copyText}>Copy Text</button>
                    <button type="button" className="btn btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </form>
            <h4>Number of letters : {text.length}</h4>
            <h4>Number of Words : {text.split(" ").length}</h4>
            <div className='container'>
                <p>Content - {text}</p>
            </div>
        </div>
    )
}
