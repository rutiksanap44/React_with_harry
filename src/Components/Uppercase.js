import React, { useState } from 'react'

export default function Uppercase(props) {

    const [text,Newtext] = useState("This was text")
    
    function handleOnChange(event){
        Newtext(event.target.value)
    }
    function handleOnClick(){
        var upperCaseText = text.toUpperCase()
        Newtext(upperCaseText)
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <br></br>
                    <textarea className="form-control mx-2" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    <br></br>
                    <button type="button" className="btn btn-primary" onClick={handleOnClick}>Convert to Upper Case</button>
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
