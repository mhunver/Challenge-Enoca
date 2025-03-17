import React from "react";


function Header(){


    return(

        <div className="Header">

            <section id="HEAD">
                <div className="nav-bar">

                    <div className="info-of-head">
                    <h2>Mehmet Huzeyfe Ünver</h2>
                    <input type="text" placeholder="Search.."></input>

                    </div>

                


                    <ul className="nav-list">
                        <li><a className="nav-link" href="/">Home</a></li>
                        <li><a className="nav-link" href="/about">About</a></li>
                        <li><a className="nav-link" href="/Category">Categories</a></li>
                    </ul>
                </div>

            </section>
            
        </div>
    )


}


export default Header;