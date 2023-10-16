import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users,setUsers] = useState(loadedUsers)
 
    const handleDelete= _id =>{
        // make sure use is confirmed  to delete
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })  
        .then((result) => {
          if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/user/${_id}`,{
              method:'DELETE',
    
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              if(data.deletedCount > 0){
                Swal.fire(
                'Deleted!',
                  'Your file has been deleted.',
                'success'
               )
               const remaining = users.filter(user=>user._id !==_id)
                   setUsers(remaining)
    
              }
            })
    
          }
        })
     
    }
    return (
        <div>
            <h2>Total user:{loadedUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Create At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user=><tr key={user._id}>
          <th>1</th>
          <td>{user.email}</td>
          <td>{user.createdAt}</td>
          <td>{user.lastLoggedAt}</td>
          <td>
           
            <button onClick={()=>handleDelete(user._id)}
             className="btn">X</button>
          </td>
        </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;