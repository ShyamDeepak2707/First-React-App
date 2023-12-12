import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, uText] = useState('');

    const handelUpclick = () => {
        let newText = text.toUpperCase();
        uText(newText);
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handelLowclick = () => {
        let lowText = text.toLowerCase();
        uText(lowText);
        props.showAlert("Converted to LowerCase!", "success")
    }

    const handelOnChange = (event) => {
        uText(event.target.value);
    }

    const handelClsclick = () => {
        let newText = ('');
        uText(newText);
    }

    const handleCpoyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to Clipboard!", "success")
    }

    const handelSpaceRemove = () => {
        let newText = text.split(/[ ]+/);
        uText(newText.join(" "));
        props.showAlert("Extra space removed!", "success")
    }

    // Then use `wordCount` instead of `text.split(' ').length` for the word count.



    //text = "new text"; Wrong way to change State
    //uText('New text here'); //Correct way to change State
    return (
        <>
            <div className='cotainer' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control text-area" style={{ backgroundColor: props.mode === 'dark' && document.body.style.backgroundColor === 'black' ? 'black' : props.mode === 'dark' ? 'rgb(2, 42, 92)' : 'white', color: props.mode === 'light' ? 'black' : 'white', position: 'relative', zIndex: 0, cursor: 'text' }} value={text} onChange={handelOnChange} id="myBox" rows="8" ></textarea>
                    <button className="btn btn-primary mx-1 my-2" disabled= {text.length === 0} onClick={handelUpclick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-2" disabled= {text.length === 0} onClick={handelLowclick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-2" disabled= {text.length === 0} onClick={handelClsclick}>Clear</button>
                    <button className="btn btn-primary mx-1 my-2" disabled= {text.length === 0} onClick={handleCpoyText}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-2" disabled= {text.length === 0} onClick={handelSpaceRemove}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0}).length} Minutes to read this</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}
