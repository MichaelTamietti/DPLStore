import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png'
import { LineChart, Line, CartesianGrid, Tooltip, Legend, XAxis, YAxis } from 'recharts';



class Dashboard extends Component {
  render() {
    const data = [
      {name: 'Monday', Visitors: 1000,  amt: 2400},
      {name: 'Tuesday', Visitors: 3000, amt: 2210},
      {name: 'Wednesday', Visitors: 2000, amt: 2290},
      {name: 'Thursday', Visitors: 2780, amt: 2000},
      {name: 'Friday', Visitors: 5890,  amt: 2181},
      {name: 'Saturday', Visitors: 4390, amt: 2500},
      {name: 'Sunday', Visitors: 3490, amt: 2100},
];
    return (
      <div>
        <Header as='h1' textAlign='center'>Dashboard Component</Header>
        <Grid textAlign='centered' celled>
        <LineChart width={1100} height={600} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="Visitors" stroke="#82ca9d" />
      </LineChart>
  </Grid>
 
      </div>
    );
  }
}

export default Dashboard;



