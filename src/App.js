
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck,faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function App() {
  const[personnes , setpersonnes] = useState([
    {id:1,Name:"mariem fathallah",age:27,status:false},
    {id:2,Name:"rami ben ncib",age:27,status:false}
   
   
  ])
  const[newPerson,setNewPerson] = useState('');
  const[updateData,setUpdateData] =useState('');

  //add task
const addPerson = ()=>{
if(newPerson){

  let newEntry={
  id:personnes.length +1,
 Name:newPerson,
age : personnes.age

  }
setpersonnes([...personnes,newEntry])
setNewPerson('')
}
}

  //delete task
  const deletePerson = (id) =>{
    // setpersonnes(personnes.filter(personne=>personne.id !== id))
  let Copy =[...personnes].filter(person => person.id !== id)

  setpersonnes(Copy,)
  }
  //Mark Task  as done or completed
  const markDone = (id) =>{
let newPersons = personnes.map(person=>{
  if(person.id === id ){
return ({...person, status: !person.status })
  }
  return person;
})
setpersonnes(newPersons)
  }

  //cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }


  //change task for update 
  const changePerson = (e) =>{
 let newEntry = {
  id: updateData.id,
  Name: e.target.value,
  status: updateData.status ? true : false
 }
 setUpdateData(newEntry)
  }


  //update task 
  const updatePerson  = ()=>{
let filterRacordes = [...personnes].filter(person=> person.id !== updateData.id)
let updateObject = [...filterRacordes,updateData]
setpersonnes(updateObject);
setUpdateData('');
  }




  return (
    
    <div className="App">
      <br/>
      <h1>  List School Persons </h1>
      <br/>
      {/* update person */}
      {updateData && updateData ? (
       <>
       <div className='row'>
        <div className='col'>
<input value={updateData && updateData.Name} onChange={changePerson}  className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
<button className='btn btn-lg btn-success l-50' onClick={updatePerson}>Update</button>
<button className='btn btn-lg btn-warning' onClick={cancelUpdate}>Cancel</button>
        </div>
      </div>
      <br/>
     </>
      ):(
      <>
      {/* add person */}
      <div className='row'>
        <div className='col'>
          <input className='form-control form-control-lg' value={newPerson} onChange={(e)=>setNewPerson(e.target.value)}/>
        </div>
<div className='col-auto'>
  <button className='btn btn-lg btn-success' onClick={addPerson}>Add Person</button>
</div>
      </div>
      <br/>
     </>

      )}
    
      {personnes && personnes.map((person,index)=>{
          return (
      
            <div>
              <div className={person.status ?'Done':''}>
             
      
                <table className='table table-hover w-50 position-relative  start-50 translate-middle' >
                  <tbody> 
                   
                  <tr>
                    <td>
                   
                  
                    </td>
                    <td>
                    {index +1}  -- {person.Name} :{person.age} 
                    </td> 
                   
                
                  </tr> 
<div className='iconsWrap'>
  <span title='Completed/notCompleted' onClick={()=>markDone(person.id)}  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
 <FontAwesomeIcon className="circle" icon={faCircleCheck}  style={{margin:"6px" , position:"relative" , left:"600px"}}/>
  </span>
  {person.status ? null:(
 <span title='Edit'  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" onClick={()=>setUpdateData({
  id:person.id,
 Name: person.Name,
 status: person.status ? true : false
 })}>
 <FontAwesomeIcon className="pen" icon={faPen} style={{margin:"6px", position:"relative" , left:"600px"}}/>
 </span>
   )}
                 
<span title='Delete'  onClick={()=>deletePerson(person.id)}  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
<FontAwesomeIcon className="can" icon={faTrashCan} style={{margin:"6px", position:"relative" , left:"600px"}}/>
 </span>
 </div> 
 </tbody>
</table>
</div>
</div>
 )
})
}
</div>
);
}

export default App;
