import React, {Component} from 'react';
import Member from './Member';

function App (){
    var obj = [{
        Tittle: 'Wasi Sajjad',
        Number: '03112185779',
        Qualification: 'Bachelors',
        JobTittle: 'Web Developer'
    },
    {
        Tittle: 'Saad Bhai',
        Number: '03119876543',
        Qualification: 'Masters',
        JobTittle: 'Sr Web Developer'
    },
    {
        Tittle: 'Rafay',
        Number: '032134567',
        Qualification: 'BS 4rth Year',
        JobTittle: 'Animator'
    }]

    return(

        <Member name = {obj} />


    );

}
export default App