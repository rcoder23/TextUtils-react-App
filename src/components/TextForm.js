import React, { useState } from 'react';

export default function TextForm(props) {

    const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    });
   

    const handleClick=()=>{
        // console.log("upper case btn clicked ");
        let newtext=text.toUpperCase();
        settext(newtext);
    }

    const handleOnchange=(event)=>{
        // console.log("text changed ");
        settext(event.target.value);
    }

    const handleClickCopy=(event)=>{
        navigator.clipboard.writeText(text);
    }

    const handleClickLoower=(event)=>{
        let newlow=text.toLowerCase();
        settext(newlow);
    }
    const handletoogle=()=>{
        if(myStyle.color ==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            });

        }else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            });
        }
    }

    const handleClickclear=(event)=>{
        settext("");
    }
    const [text, settext] = useState("");
    return (
        <>
        
        <div id="stt">
            <div className="mb-3 text-center">
                <h1>{props.heading}</h1>
           
            <textarea className="form-control" id="exa" value={text} onChange={handleOnchange} rows="8"></textarea>

            </div>

            <button className="btn btn-success mx-1" onClick={handleClick}>Convert To Upper Case</button>
            <button className="btn btn-success mx-1" onClick={handleClickLoower}>Convert To Lower Case</button>

            <button className="btn btn-success mx-1" onClick={handleClickclear}>Clear text</button>
            <button className="btn btn-success mx-1" onClick={handleClickCopy}>Click copy to clipboard</button>
        </div>
        <br/>
       
        <div className="container" id="stt2">
            <h2>Text Summary</h2>
            <p>Total words present is {text.split(' ').length-1}  and Total letter present is {text.length}</p>

            <h2>Preview </h2>
            <p>{text}</p>
        </div>

        </>
    )
}
