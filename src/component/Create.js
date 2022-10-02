

import React from 'react'
 
const Create = () => {
 
    const handle = () => {
        var data = {}
        data["todo"] = document.querySelector("textarea").value;
        data["time"] = document.querySelector('[type="datetime-local"]').value;
        data["imp"] = document.querySelector('[type="checkbox"]').value;
        console.log(data);
        localStorage.setItem("data" , JSON.stringify(data))
 
    }
 
  return (
 
    <div className="float">
    <form >
        <label >Todo</label>
        <textarea ></textarea>
        <label >SELECT DATE</label>
        <input type="datetime-local" />
        <div className="g2">
            <label >Priority</label>
            <input type="checkbox" ></input>
        </div>
        <button type="submit" onClick={handle}>Save</button>
    </form>
    </div>
  )
}
 
export default Create
