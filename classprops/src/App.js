import React, { Component } from 'react';
import Detail from './Detail';

class App extends Component{
    render(){
        var Mobile = [{
            MobileName: 'Real-Me-5',
            MobileRam: '4 GB',
            MobileRom: '64 GB',
            MobilePrice: '26000'
        },
        {
            MobileName: 'Motorola E4',
            MobileRam: '2 GB',
            MobileRom: '16 GB',
            MobilePrice: '15000'
        }]

        return(
            <React.Fragment>
                <Detail name = {Mobile}/>
            </React.Fragment>


        );
    }

}
export default App