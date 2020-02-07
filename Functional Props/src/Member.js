import React, {Component} from 'react';


function Member(props){
  
  var Mydata = props.name;
  var Mapdata = Mydata.map((a)=>{
    return(
      <tr>
        <td>{a.Tittle}</td>
        <td>{a.Number}</td>
        <td>{a.Qualification}</td>
        <td>{a.JobTittle}</td>
      </tr>
      );
  })


  return(

    <React.Fragment>
      <table border='1px solid'>
        <tr><th>Please find Below Information</th></tr>
  <td>{Mapdata}</td>
      </table>
    </React.Fragment>

  );

}
export default Member