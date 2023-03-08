import React, { useState } from 'react'

// useState allows to change the state of a variable without reloading the page.
// in this case text which is user input and the setText which is used for updating the state of the text.


export default function TextForm(props) {
    const [text, setText] = useState("");

    //function for converting text to uppercase
    const handleUppercaseButton = () => {
        //console.log("button clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    //function for converting text to lowercase
    const handleLowercaseButton = () => {
        //console.log("button clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

     //function for clearing Text
     const handleClearTextButton = () => {
        //console.log("button clicked")
        let newText = ""
        setText(newText)
        props.showAlert("Cleared", "success")
    }

    //function to handle the change applied by the user
    const handleOnChange = (event) => {
        //console.log("On Changed")
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#434242' : 'white' }}>
                <h1 className='text-center' >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#181D31', color: props.mode === 'light' ? '#434242' : 'white' }} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mx-2" onClick={handleUppercaseButton}>Convert to uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowercaseButton}>Convert to lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearTextButton}>Clear Text</button>
                </div>
            </div>

            <div className='container my-2'  style={{ color: props.mode === 'light' ? '#434242' : 'white' }}>
                <h2>Text Summary</h2>
                <h6>Minutes to read: {0.0008 * text.split(' ').length}</h6>
                <h6>Characters: {text.length}</h6>
                <h6>Words: {text.split(' ').length}</h6>
            </div>

            <div className='container my-2' style={{ color: props.mode === 'light' ? '#434242' : 'white' }}>
                <h2>Preview</h2>
                <h6>{text}</h6>
            </div>
        </>
    )
}
