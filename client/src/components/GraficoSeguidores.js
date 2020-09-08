import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getFollowers } from '../actions/index'
import { connect } from 'react-redux'


class GraficoSeguidores extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ////// Datos para ejemplo
        { name: 'Usuario 1', seguidores: 15 },
        { name: 'Usuario 2', seguidores: 20 },
        { name: 'Usuario 3', seguidores: 10 },
        { name: 'Usuario 4', seguidores: 25 },
        { name: 'Usuario 5', seguidores: 27 },
        { name: 'Usuario 6', seguidores: 7 },
        { name: 'Usuario 7', seguidores: 34 },
        { name: 'Usuario 8', seguidores: 30 },
        { name: 'Usuario 9', seguidores: 17 },
        { name: 'Usuario 10', seguidores: 5 },

      ]
    };
  }

  //////// Corregir ////////
  // componentDidMount() {
  //   var array = this.props.users;
  //   let datos = []
  //   for (let i = 0; i < array.length - 20; i++) {
  //     let nombreUsuario = array[i].login
  //     let link = array[i].followers_url

  //     async function cantSeguidores(path) {
  //       let response = await fetch(path);
  //       let data = await response.json()
  //       return data;
  //     }
  //     let numero = cantSeguidores(link)
  //     let objeto = { name: nombreUsuario, seguidores: numero };
  //     datos.push(objeto)
  //   }
  //   console.log(datos)
  //   this.setState({ data: datos })
  // }



  render() {

    return (
      <BarChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 50, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="seguidores" fill="#49dbf0" />
      </BarChart>
    );
  }
}


function mapStateToProps(state) {
  return {
    ...state,
    users: state.users,
  };
}


export default connect(mapStateToProps, { getFollowers })(GraficoSeguidores);