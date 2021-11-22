import React from "react";
import ReactDOM  from "react-dom";
import './style.css';


const App = () => {
    return(
        <div>
           <header>
                <div class="logo">Bird Sanctuary</div>
                    <nav>
                        <ul>
                            <li><a href="#index" class="active">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                <div class="menu-toggle active"><i class="fa fa-bars" aria-hidden="true"></i></div>
            </header>	

            <br/>

            <section id="home">
                <div class="container">
                    <h2 class="ml13"> Welcome to Our Bird Sanctuary </h2>
                    <h4 class="ml16"> Ranganathittu is a Bird Sanctuary that can be Visited throughout the year by Bird Lovers </h4> 	
                    <a href="#" class="btn btn-outline-warning">Read More</a>
                </div>	
            </section>		

            <section id="about">
                <div class="container">			
                    <h2> About Us </h2> <br/>
                    <div class="row">
                        <div class="col-sm-4"><br/>
                            <img src="/images/bg5.jpg" class="img-thumbnail" style={{width:"1000" ,height:"500"}}  /> 
                        </div> 
                        <div class="col-sm-8">
                        <br/>
                            <p style={{color:"#fc7608"}}> Ranganathittu Bird Sanctuary is open to visitors from 9 AM to 6 PM on all days.
                                The Boat ride is highly recommended as most of the bird sanctuary comprises of islands. 
                                You may spot marsh crocodiles during the boat ride. </p>
                            
                            <p style={{color:"#fc7608"}}> Declared a sanctuary in 1940 at the behest of the famous ornithologist <b> 
                                Dr. Salim Ali </b> the Ranganathittu Bird Sanctuary is a paradise for bird 
                                watchers and nature lovers. The sanctuary is spread over an area of 0.67 sq km and located
                                on the banks of River Cauvery. </p>
                                
                            <p style={{color:"#fc7608"}}> The best time to visit the sanctuary is between the months of June and November 
                                as these are nesting months for the birds. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery">
                <div class="container">			
                    <h2> Gallery </h2> <br/>
                    <div class="row">			
                        <div class="col-sm-4">
                            <img src="images/img1.jpg" class="img-thumbnail" /> 
                        </div> 
                        <div class="col-sm-4">
                            <img src="images/img2.jpg" class="img-thumbnail" /> 
                        </div> 
                        <div class="col-sm-4">
                            <img src="images/img3.jpg" class="img-thumbnail" /> 
                        </div> 
                    </div>
		
		            <br/>
		
                    <div class="row">			
                        <div class="col-sm-4">
                            <img src="images/img4.jpg" class="img-thumbnail" /> 
                        </div> 
                        <div class="col-sm-4">
                            <img src="images/img5.jpg" class="img-thumbnail" /> 
                        </div> 
                        <div class="col-sm-4">
                            <img src="images/img6.jpg" class="img-thumbnail" /> 
                        </div> 
                    </div>
                </div>
            </section>	


            <section id="service">
                <div class="container">			
                    <h2> Services </h2> <br/>			
                        <div class="row">
                        
                        <div class="col-sm-4">
                            <img src="images/img6.jpg" class="img-thumbnail" /> <br/> <br/> 
                            <h5 style={{color:"#fc7608"}}> Boating Facility Avaliable, Best View While Boating  </h5>
                        </div> 
                        <div class="col-sm-4">
                            <img src="images/imgp.jpg" class="img-thumbnail" /> <br/> <br/>
                            <h5 style={{color:"#fc7608"}}> Best Place For Photo Shoot & Video Shoot </h5>
                        </div> 
                        <div class="col-sm-4">
                            <img src="images/img3.jpg" class="img-thumbnail" />  <br/> <br/>
                            <h5 style={{color:"#fc7608"}}> Best Time to Visit June & November </h5>
                        </div> 
                    </div>			
                </div>
            </section>	

            <section id="contact">
                <div class="container">			
                    <h2> Contact Us </h2> <br/>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="call" style={{color:"#fc7608"}}><i class="fa fa-phone" aria-hidden="true"></i> Contact <p> 99 00 123 654 or 99 00 125 346</p>				
                            </div> <br/>
                            <div class="call" style={{color:"#fc7608"}}><i class="fa fa-map-marker" aria-hidden="true"></i> Palahalli <p> Sri Ranga Patna Taluk @ Mandya District </p>
                            </div> <br/>
                            <div class="call" style={{color:"#fc7608"}}><i class="fa fa-envelope-o" aria-hidden="true"></i> Website <p> www.birdsanctuary.com </p>			
                            </div> 
                        </div> 
                        
                        <div class="col-sm-6">
                            <form action="" method="POST" >
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Username" name="uname" required  />
                                </div>
                                
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email" name="email" required />
                                </div>
                                
                                <div class="form-group">
                                    <textarea type="text" class="form-control" placeholder="Message" name="uname" required></textarea>
                                </div>
                
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>	
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));