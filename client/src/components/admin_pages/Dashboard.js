import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png'
import { LineChart, Line, CartesianGrid, Tooltip, Legend, XAxis, YAxis } from 'recharts';



class Dashboard extends Component {
  render() {
    const data = [
      {name: 'Monday', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Tuesday', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Wednesday', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Thursday', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Friday', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Saturday', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Sunday', uv: 3490, pv: 4300, amt: 2100},
];
    return (
      <div>
        <Header as='h1' textAlign='center'>Dashboard Component</Header>
        <Grid celled>
    <Grid.Row>
      <Grid.Column width={2}>
        <Image src={Placeholder} />
      </Grid.Column>
      <Grid.Column width={2}>
        <Image src={Placeholder} />
      </Grid.Column>
      <Grid.Column width={2}>
        <Image src={Placeholder} />
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column width={2}>
        <Image src={Placeholder} />
      </Grid.Column>
      <Grid.Column width={2}>
        <Image src={Placeholder} />
      </Grid.Column>
      <Grid.Column width={2}>
        <Image src={Placeholder} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      </div>
    );
  }
}

export default Dashboard;



