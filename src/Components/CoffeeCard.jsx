// import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({coffee, coffees,setCoffees }) => {
  const {_id,name,quantity,supplier,category,photo} =coffee;

  
  const handleDelete=_id =>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://coffee-store-server-n73abjfj4-joys-projects-3bf6e672.vercel.app/coffee/${_id}`,{
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
          const remaining = coffees.filter(cof=>cof._id !==_id)
          setCoffees(remaining);

          
          // setCoffees(remaining)
         

          }
        })

      }
    })
  }

  console.log(coffee);
  
  return (
    <div>
      
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-5"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className=" flex justify-between items-center border w-full">
          <div className="text-start">
          <h2 className="">Name:{name}</h2>
          <p>quantity:{quantity}</p>
          <p>supplier:{supplier}</p> 
          <p>category:{category}</p>
          </div>
          <div className=" flex flex-col gap-4">
            <button className="btn">views</button>
            <Link to={`updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
            </Link>
            <button onClick={() =>handleDelete(_id)}
             className="btn">X</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
