import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, uText] = useState('');

    const handelUpclick = () => {
        // console.log('Upper case was clicked ' + text);
        // uText('The text was changed to upper case');
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
        console.log('On Change');
        uText(event.target.value);
    }

    const handelClsclick = () => {
        let newText = ('');
        uText(newText);
    }

    const handleCpoyText = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard!", "success")
    }

    const handelSpaceRemove = () => {
        let newText = text.split(/[ ]+/);
        uText(newText.join(" "));
        props.showAlert("Extra space removed!", "success")
    }

    const wordsArray = text.trim().split(/\s+/).filter(word => word !== '');
    const wordCount = wordsArray.length;

    // Then use `wordCount` instead of `text.split(' ').length` for the word count.



    //text = "new text"; Wrong way to change State
    //uText('New text here'); //Correct way to change State
    return (
        <>
            <div className='cotainer' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control text-area" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white', position: 'relative', zIndex: 0, cursor: 'text' }} value={text} onChange={handelOnChange} id="myBox" rows="8" ></textarea>
                    <button className="btn btn-primary mx-1 my-2" onClick={handelUpclick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handelLowclick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handelClsclick}>Clear</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleCpoyText}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handelSpaceRemove}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{Math.round(0.008 * wordCount)} Minutes to read this</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter your text in the above box to preview here'}</p>
            </div>
        </>
    )
}
