import React from 'react'

function ChooseClass() {
    return (
        <div className="secondpage">
            <div className="secondpageTop">
                <h1>CHOOSE CLASS</h1><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc-</p>
                <p>ing elit. Vivamus odio vitae vestibulum ves-</p>
                <p>tibulum.</p><br/>
            </div>
            <div className="secondpageItems">
                <div>
                    <img src = "newbie.jpg" alt="poster"/><br/>
                    <h1>NEWBIE CLASS</h1><br/>
                    <p>Lorem ipsum dolor sit amet, </p>
                    <p>consectetur adipiscing elit.</p>

                </div>
                <div>
                    <img src = "advance.jpg" alt="poster"/><br/>
                    <h1>ADVANCED CLASS</h1><br/>
                    <p>Lorem ipsum dolor sit amet,</p>
                    <p> consectetur adipiscing elit.</p>
                </div>
                <div>
                    <img src = "expert.jpg" alt="poster"/><br/>
                    <h1>EXPERT CLASS</h1><br/>
                    <p>Lorem ipsum dolor sit amet,</p>
                    <p> consectetur adipiscing elit.</p>
                </div>             
            </div>
        </div>
    )
}

export default ChooseClass
