import React from 'react'
import { Contact } from './Contact'
// import BookingForm from './BookingForm'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div class="about">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>About Us</h2>
                     <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. </p>
                     <a class="read_more"> Read More</a>
                   </div>
                  <div>
                     
                      <button class="read_more">Book Hotel</button>
                      
                 </div>
               </div>
               <div class="col-md-7">
                  <div class="about_img">
                     <figure><img src="../image/about.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="our_room">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Our Room</h2>
                     <p>Lorem Ipsum available, but the majority have suffered </p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover" class="room">
                     <div class="room_img">
                        <figure><img src="images/room1.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover" class="room">
                     <div class="room_img">
                        <figure><img src="images/room2.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover" class="room">
                     <div class="room_img">
                        <figure><img src="images/room3.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover" class="room">
                     <div class="room_img">
                        <figure><img src="images/room4.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover" class="room">
                     <div class="room_img">
                        <figure><img src="images/room5.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover" class="room">
                     <div class="room_img">
                        <figure><img src="images/room6.jpg" alt="#"/></figure>
                     </div>
                     <div class="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Contact Us</h2>
                  </div> 
               </div>
            </div>
            <div  class="gallery">
            <div class="gallery">
    <div class="container">
       <div class="row">
          <div class="col-md-12">
             <div class="titlepage">
                <h2>gallery</h2>
             </div>
          </div>
       </div>
       <div class="row">
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <img src="../image/gallery1.jpg" alt="#"/>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <figure><img src="images/gallery2.jpg" alt="#"/></figure>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <figure><img src="images/gallery3.jpg" alt="#"/></figure>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <figure><img src="images/gallery4.jpg" alt="#"/></figure>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <figure><img src="images/gallery5.jpg" alt="#"/></figure>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <figure><img src="images/gallery6.jpg" alt="#"/></figure>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <figure><img src="images/gallery7.jpg" alt="#"/></figure>
             </div>
          </div>
          <div class="col-md-3 col-sm-6">
             <div class="gallery_img">
                <figure><img src="images/gallery8.jpg" alt="#"/></figure>
             </div>
          </div>
       </div>
    </div>
 </div>
            
            </div>
            <div class="row">
               <div class="col-md-6">
                 <Contact/>
               </div>
               <div class="col-md-6">
                  <div class="map_main">
                     <div class="map-responsive">
                        {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0"  allowfullscreen=""></iframe> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Home