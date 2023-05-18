import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { deletesingleUser } from "../reduxstore/slice/deleteaUser";



const tableData = [
  {
    id: user.id,
    name: user.username,
    age: user.email,
    address: "20/07/2010",
    status: "submited",
  },

  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function UserTable({user}) {
  console.log(user)
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState();
  const [validateRole, setValidateRole] = useState();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state );
  function checkRoleValidation(userRole) {
    console.log(userRole)
    if (userRole === "auditor") {
      setValidateRole(userRole);
     
    } 
    
  }
 //delete handler
 const handleDelete = ({ id }) => {
  dispatch(deletesingleUser({ id:id }));
  // window.location.reload();
  // window.alert("Post Deleted !");
};


  useEffect(() => {
    const role = authService.getUserRole();
    // console.log(role)
    checkRoleValidation(role);
    setUserRole(role);
    
  }, []);

  return (
    <section className="w-full mx-20">
      <div className="mb-2 mt-10 text-lg font-bold  ">User Details</div>
      <hr></hr>
      <TableContainer>
        <Table>
          <TableHead className="bg-[#E3F0FF]">
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>User Id</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Serial number</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Email</TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                Registration date
              </TableCell>
              <TableCell style={{ fontWeight: 600 }}>
                Verification Status
              </TableCell>
              <TableCell style={{ fontWeight: 600 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user?.map((data) => 
   <TableRow key={data.id}>
   <TableCell>{data.id}</TableCell>
   <TableCell>{data.username}</TableCell>
   <TableCell>{data.username}</TableCell>
   <TableCell>{data.username}</TableCell>
   <TableCell>{data.username}</TableCell>
   <TableCell>
   <div className="flex">
       {validateRole ? (
         <button
           className="mr-2 mt-2 cursor-not-allowed rounded-md bg-yellow-900 px-2 py-2 text-xs text-white opacity-50 "
           onClick={() => handleClick(data.id)}
         >
           Disable
         </button>
       ) : (
         <button
           className="mr-2 mt-2 rounded-md bg-yellow-900 px-2 py-2 text-xs text-white "
           onClick={() => handleClick(user.id)}
         >
           Disable
         </button>
       )}

{validateRole ? (
         <button
           className="mr-2 mt-2 cursor-not-allowed rounded-md bg-red-900 px-2 py-2 text-xs text-white opacity-50 "
           onClick={() => handleClick(data.id)}
         >
           Delete
         </button>
       ) : (
         <button
           className="mr-2 mt-2 rounded-md bg-red-900 px-2 py-2 text-xs text-white "
           onClick={() => {
             dispatch(handleDelete(data.id),
             );
           }}
         >
           Delete
         </button>
       )}







       {validateRole ? (
         <button
           className="mr-2 mt-2 cursor-not-allowed rounded-md bg-green-900 px-2 py-2 text-xs text-white opacity-50 "
           onClick={() => handleClick(user.id)}
         >
           Enable
         </button>
       ) : (
         <button
           className="mr-2 mt-2 rounded-md bg-green-900 px-2 py-2 text-xs text-white "
           onClick={() => handleClick(user.id)}
         >
           Enable
         </button>
       )}
     </div>
   </TableCell>
 </TableRow>          
)}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default UserTable;
