import { Button } from 'react-bootstrap'
import React from 'react'
import { Grid3x3GapFill } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'

const MainPage = () => {
    const history = useHistory();

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="header">
                        <h1>Choose <span> as you want </span> </h1>
                        <h1>Pay <span>as you can</span></h1>
                        <div className="shopnow">
                            <Button onClick={() => history.push ('/commerce/')}>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="select">
                        <p>Lates</p>
                        <p>All</p>
                    </div>
                    <div class="concept">
                        <h2>New Concept <span> of Online Shopping </span> </h2>
                    </div>
                    <div class="text">
                        <p>Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here.</p>
                    </div>    
                </div>
            </div>
            <div class="content">
                    <div class="content-1">
                        <h3>GALLERY</h3> 
                        <h4>SUBTITLE</h4>
                    </div>
                    <div class="content-2">
                        <h3>ACTIVITIES</h3> 
                        <h4>SUBTITLE</h4>
                    </div>
                    <div class="content-3">
                        <h3>KEYNOTES</h3> 
                        <h4>SUBTITLE</h4>
                    </div>
            </div>   
            <div class="footer">
                <Grid3x3GapFill />
            </div>        
        </>
    )
}

export { MainPage }