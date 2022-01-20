import React, { useState } from 'react'
import Alert from '../Alert';

export default function Form(props) {
    const [text, setText] = useState("Enter text to analyze")
    const [alert, setAlert] = useState(null);

    const darkTheme = {
        color: '#242526',
        background: 'whitesmoke',
        borderRadius: "8px"
    }
    const lightTheme = {
        color: 'whitesmoke',
        background: '#242526',
        borderRadius: "8px"
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const toUpperCase = () => {
        const uppercasedText = text.toUpperCase();
        setText(uppercasedText);
    }
    const toLowerCase = () => {
        const lowercasedText = text.toLowerCase();
        setText(lowercasedText);
    }
    const removeSpace = () => {
        const newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }
    const emailExtractor = () => {
        const email = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        if (email) {
            setAlert({
                alertMsg: { email },
                type: "success"
            })
        }
        else {
            setAlert({
                alertMsg: "No Email Found",
                type: "warning"
            })
        }
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        window.alert("text copied to clipboard")
    }
    return (
        <>
            <Alert alert={alert} />
            <div className='container my-4 p-4' style={props.mode === 'light' ? darkTheme : lightTheme}>
                <form>
                    <textarea className='form-control' rows="5" value={text} onChange={handleOnChange}></textarea>
                    <div className='btns_wrapper my-3'>
                        <button type="button" className='btn btn-sm btn-secondary me-2' onClick={toUpperCase}>Uppercase</button>
                        <button type="button" className='btn btn-sm btn-secondary me-2' onClick={toLowerCase}>Lowercase</button>
                        <button type="button" className='btn btn-sm btn-secondary me-2' onClick={emailExtractor}>Extract email</button>
                        <button type="button" className='btn btn-sm btn-secondary me-2' onClick={copyText}>Clipboard</button>
                        <button type="button" className='btn btn-sm btn-secondary' onClick={removeSpace}>Remove white space</button>



                    </div>
                </form>
                <div className='my-3'>
                    <h2>Your Text Summary</h2>
                    <div>{text.split(" ").length-1} words and {text.length} characters</div>
                    <div>{0.008 * text.split(" ",).length} miniutes read</div>

                </div>
            </div>
        </>
    )
}
