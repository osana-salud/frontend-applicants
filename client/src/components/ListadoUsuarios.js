import React, { useState } from 'react';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core'
import CardUser from './CardUser'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { connect } from 'react-redux'


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Details: forwardRef((props, ref) => <AssignmentIcon {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles((theme) => ({
  modal: 
  {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
}));


function ListadoUsuarios(props) {
  const [user, setUser] = useState();
  const [modalDetails, setModalDetails] = useState(false);


  let columns = [
    { title: 'ID', field: 'id' },
    { title: 'User', field: 'login' },
  ]

  const classes = useStyles();

  const abrirCerrarModalDetails = () => {
    setModalDetails(!modalDetails)
  }

  const details = (usuario) => {
    setUser(usuario)
    abrirCerrarModalDetails()
  }

  const bodyDetails = (
    <div className={classes.modal}>
      <CardUser
        abrirCerrarModalDetails={abrirCerrarModalDetails}
        user={user}
      />
    </div>
  )

  return (
    <div>
      <MaterialTable
        title=""
        columns={columns}
        data={props.users}
        icons={tableIcons}
        actions={[
          {
            icon: tableIcons.Details,
            tooltip: 'Details',
            onClick: (evento, rowData) => details(rowData)

          },
        ]}
        options={{
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: '#49dbf0',
            color: '#000000',
            fontWeight: 'bold'
          }
        }}
        localization={
          {
            header: {
              actions: 'Details'
            }
          }
        }
      />
        <Modal
          open={modalDetails}
          onClose={abrirCerrarModalDetails}>
          {bodyDetails}
        </Modal>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state,
    users: state.users,
  };
}



export default connect(mapStateToProps, {})(ListadoUsuarios);
