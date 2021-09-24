import './App.css';

function App() {
  return (
   <div>

{/* *****************************************FIRST PAGE****************************************************/}
    <div className="firstpage">
      <div className= "logo">
               <img src = "logo1.jpg" alt="logo"/>
      </div>
      <div className="navbar">        
        <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li className="services"><a href="#">SERVICES</a></li>
                <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>

      <div className="firstpageItems">
        <div className="posterMain">
           <img src = "poster-main.jpg" alt="poster"/>
        </div>
        <div className="mainContent">
         <h2>YOGA CLASS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipi-</p>
            <p> scing elit.Donec fringilla neque euismod volut-</p>
            <p> pat curus. Vestibulum ac pretium orci.</p>
            <button>JOIN NOW</button>
        </div>
      </div>
    </div>

{/* *****************************************SECOND PAGE****************************************************/}

    <div className="secondpage">
      <div className="secondpageTop">
         <h1>CHOOSE CLASS</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisc-</p>
          <p>ing elit. Vivamus odio vitae vestibulum ves-</p>
          <p>tibulum.</p>
      </div>
          <div className="secondpageItems">
             <div>
                <img src = "newbie.jpg" alt="poster"/>
                <h1>NEWBIE CLASS</h1>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>

             </div>
             <div>
                <img src = "advance.jpg" alt="poster"/>
                <h1>ADVANCED CLASS</h1>
                <p>Lorem ipsum dolor sit amet,</p>
                <p> consectetur adipiscing elit.</p>
             </div>
             <div>
                <img src = "expert.jpg" alt="poster"/>
                <h1>EXPERT CLASS</h1>
                <p>Lorem ipsum dolor sit amet,</p>
                <p> consectetur adipiscing elit.</p>
             </div>             
        </div>
    </div>

{/* *******************************************THIRD PAGE**************************************************/}
      
      <div className="thirdpage">
         <h1>OUR STATS</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisc-</p>
          <p>ing elit. Vivamus odio vitae vestibulum vesti-</p>
          <p>bulum</p>
      </div>

{/* *********************************************FOURTH PAGE***********************************************/}

       <div className="fourthpage">
         <div className="fourthpageTop">
            <h1>PRICING</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisc-</p>
              <p>ing elit. Vivamus odio vitae vestibulum vesti-</p>
              <p>bulum.</p>
         </div>

         <div className="fourthpageItems">
            <div>
               <h3>NEWBIE CLASS</h3>
               <h3>$00.00</h3>
               <img src = "badge.png" alt="badge"/>
               <p>Lorem ipsum dolor sit amet, </p>
               <p>consectetur adipiscing elit.</p>
               <button>REGISTER NOW</button>
            </div>

            <div>
                <h3>ADVANCE CLASS</h3>
                <h3>$00.00</h3>
                <img src = "badge.png" alt="badge"/>
                <p>Lorem ipsum dolor sit amet, </p>
               <p>consectetur adipiscing elit.</p>
               <button>REGISTER NOW</button>
            </div>

            <div>
                <h3>EXPERT CLASS</h3>
                <h3>$00.00</h3>
                <img src = "badge.png" alt="badge"/>
                <p>Lorem ipsum dolor sit amet, </p>
               <p>consectetur adipiscing elit.</p>
               <button>REGISTER NOW</button>
            </div>
         </div>
       </div>

{/* *********************************************FIFTH PAGE***********************************************/}

      <div className="fifthpage">
         <img src = "face.jpg" alt="poster"/>
          <p>Lorem ipsum dolor sit amet, consecte-</p>
          <p>tur adipiscing elit. Vivamus lacinia odio</p>
          <p>vitae vestibulum vestbulum.</p>
          <h2>TRAINER DEVANDRA</h2>
      </div>

{/* *********************************************sixth page***********************************************/}
      <div className="sixthpage">
         <h1>DONT MISS OUR UPDATE</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisc-</p>
          <p>ing elit. Vivamus odio vitae vestibulum ves-</p>
          <p>tibulum.</p>
          <div>
          <input type="text" placeholder="Your Email" /><button>subscribe</button> 
          </div>
      </div>
      
{/* *********************************************seventh page***********************************************/}
      <div className="seventhpage">
         <div>
            <h3>Title Here</h3>
            <p>Lorem ipsum dolor sit amet, consecte-</p>
            <p>tur adipiscing elit. Aliquam at dignis-</p>
            <p>sim nunc, id maximus ex. Etiam nec</p>
            <p>dignissim elit, at dignissim enim.</p>
         </div>

         <div>
            <h3>About</h3>            
               <a href="#">History</a>
               <a href="#">Our Team</a>
               <a href="#">Brand Guidelines</a>
               <a href="#">Terms And Condition</a>
               <a href="#">Privacy Poilcy</a>            
         </div>

         <div>
            <h3>Services</h3>            
               <a href="#">How to Order</a>
               <a href="#">Our Product</a>
               <a href="#">Order Status</a>
               <a href="#">Promo</a>
               <a href="#">Payment Method</a>            
         </div>

         <div>
         <h3>Follow</h3>            
               <a><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
               <a><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
               <a><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
               <a><i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp</a>                          
         </div>
      </div>
    </div>
  );
}

export default App;
