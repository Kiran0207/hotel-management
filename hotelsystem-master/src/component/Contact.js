import React from 'react'

export const Contact = () => {
  return (
    <div> <form id="request" class="main_form">
    <div class="row">
       <div class="col-md-12 ">
          <input class="contactus" placeholder="Name" type="type" name="Name"/> 
       </div>
       <div class="col-md-12">
          <input class="contactus" placeholder="Email" type="type" name="Email"/> 
       </div>
       <div class="col-md-12">
          <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
       </div>
       <div class="col-md-12">
          <textarea class="textarea" placeholder="Message" type="type" message="Name">Message</textarea>
       </div>
       <div class="col-md-12">
          <button class="send_btn">Send</button>
       </div>
    </div>
 </form></div>
  )
}
