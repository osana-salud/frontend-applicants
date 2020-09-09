import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';



function GraficoSeguidores(props) {
  const [name, setName] = useState([]);
  const [followers, setfollowers] = useState([]);

  const setEstados = () => {
    var array = props.users;
    for (let i = 0; i < array.length - 20; i++) {
      fetch(`https://api.github.com/users/` + array[i].login)
        .then(res => res.json())
        .then(data => {
          setName([...name, name.push(data.login)])
          setfollowers([...followers, followers.push(data.followers)])
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    setEstados()
  }, [])

  const data = {
    labels: name,
    datasets: [
      {
        label: 'Seguidores',
        backgroundColor: '#49dbf0',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: '#0a497b',
        hoverBorderColor: 'FF0000',
        data: [22103, 21050, 8211, 9662, 503, 112, 1324, 131, 702, 624]
        // data: followers,
      }
    ]
  }

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    }
  }

  return (<div  style={{  marginTop: '50px'}}>
    <h2>Seguidores de los primeros 10 usuarios</h2>
    <Bar
      data={data}
      width={300}
      height={300}
      options={opciones}
    />
  </div>)
}


function mapStateToProps(state) {
  return {
    ...state,
    users: state.users,
  };
}

export default connect(mapStateToProps, {})(GraficoSeguidores);

