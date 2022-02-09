import React from "react";
import pic1 from '../images/pic.jpg'
import pic3 from '../images/pic2.jpg'
import pic5 from '../images/pic3.jpg'

function Image(){

    return(
        <>
        <img src={pic1} width={400} height={400} alt="" />
        <img src={pic3} width={400} height={400} alt="" />
        <img src={pic5} width={400} height={400} alt="" />
        
        </>
    )
}
export default Image