import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const{_id,details,name,quantity,supplier,taste, category,photo} =coffee
    

    const handleUpdatedCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee ={name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee);
        // send data to the server
        fetch(`https://coffee-store-server-n73abjfj4-joys-projects-3bf6e672.vercel.app/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedCoffee)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
              //  alert('user update successfully')
                Swal.fire({
                    title: 'success!',
                    text: 'coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Add'
                  })
            }
        })
        
    }
    return (
        <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
      {/* <h2 className="text-3xl font-bold">Update Coffee:{coffee.name}</h2> */}
      <form onSubmit={handleUpdatedCoffee}>
         {/* form name and quantity row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="coffee name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-4 ">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo" defaultValue={photo}
                placeholder="Enter photo URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          
        </div>
        <input type="submit" value="Update coffee"  className="btn w-full bg-[#f5d789]"/>
      </form>
    </div>
    );
};

export default UpdateCoffee;