import React, { Component } from 'react'

 class TicketControl extends Component {


    componentDidMount() {
        this.waitTimeUpdateTimer = setInterval(() =>
          this.updateTicketElapsedWaitTime(),
        1000
        );
      }
    
      // We won't be using this method for our help queue update - but it's important to see how it works.
      componentDidUpdate() {
        console.log("component updated!");
      }
    
      componentWillUnmount(){
        console.log("component unmounted!");
        clearInterval(this.waitTimeUpdateTimer);
      }
    
      updateTicketElapsedWaitTime = () => {
        console.log("tick");
      }
    render() {
        console.log ('TicketControl render')  
        return (
            <div>
               <h2>setInterval ComponentDidMount  {this.waitTimeUpdateTimer}   </h2>
            
            </div>
        )
    }
}

export default TicketControl
