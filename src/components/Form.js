import React , { useState }  from 'react';

export default function Form(){
    const [text, settext] = useState("");
    const upper = ()=>{
        console.log('clicked')
        settext(text.toUpperCase())
    }
    const lower= ()=>{
        console.log('clicked')
        settext(text.toLowerCase())
    }
    const handler= (e)=>{
        console.log('this is handler in change')
        settext(e.target.value)
    }
    return(
        <div className="container my-5  ">
            <h2 className="py-6 text-secondary">Enter Your Text Here</h2>
        <div className="input-group">
  <textarea className="form-control "  rows="7" aria-label="With textarea" value={text} onChange={handler} placeholder="Enter Your Text Here"></textarea>
</div>
  <button className="btn btn-primary my-4" onClick={upper} >Convert To Uppercase</button>
  <button className="btn btn-secondary my-4 mx-4" onClick={lower} >Convert To Lowercase</button>

</div>
    )
}
