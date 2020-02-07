import React, { Component } from 'react';

class Detail extends Component
{

    render(){
        var Mobdetail = this.props.name;
        var Alldetail = Mobdetail.map((a)=>
        {
            return(
                <div>
                <li>{a.MobileName}</li>
                <li>{a.MobileRam}</li>
                <li>{a.MobileRom}</li>
                <li>{a.MobilePrice}</li><br></br>
                </div>
                );
            
        })
        return(
            <div>
                <ul>All mobile Details {Alldetail}</ul>
            </div>

        );
    }

}
export default Detail