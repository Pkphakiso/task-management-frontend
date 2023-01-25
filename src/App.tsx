import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskAPI } from './api/task_api';
import { TaskDTO } from './api/dto/task.dto';
import { Grid, Modal } from '@mui/material';
import Task from './components/Task';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CreateTaskModal from './components/CreateTaskModal';


const App = () => {
  const [ tasks , setTasks ] = useState<TaskDTO[]>([]);
  const [createModalOpen,setcreateModalOpen]= useState(false);
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const [openModal,setOpenModal] = useState(false);

  useEffect( () => {
    async function fetchAlls(){
      const resp = await TaskAPI.getAll();
      
      setTasks(resp);

    }
    fetchAlls();
  }, []);
  
  return (
    <div className="App">
      {/* <CreateTaskModal open={createTaskModalOpen} handleClose={()=> setCreateTaskModalOpen(false)} /> */}

      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TASK MANAGEMENT
          </Typography>
          <Button color="primary" variant='contained' onClick={()=> setOpenModal(true)} >
            Create Task
          </Button>
        </Toolbar>
      </AppBar>
 
      <Grid container spacing={1}>
        {
          tasks.map((task) => {
            return ( 
              <Grid item xs={3}> 
                <Task data={task} />
              </Grid>
            )}
          )
        }

      </Grid>
      { openModal && <CreateTaskModal open={openModal} closeModal={ ()=> setOpenModal } /> }
        

      {/* <ul>
        {
          tasks.map(task => {
            return (<li key={task.id}>    Title:{ task.title }
              <br />
              Description : {task.description}</li>);
          })
        }
      </ul> */}
          
    </div>
  );
}

export default App;
