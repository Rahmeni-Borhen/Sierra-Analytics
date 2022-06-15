
import React, { useState, useEffect } from "react";
import"./Users.css";
import { toast } from "react-toastify";
import axios from "axios";
// import { getalluser } from "../../../../server/controllers/user";
 const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    getalluser();
  },[])

  const getalluser = async () => {
    const response = await axios.get("http://localhost:5000/users/allusers");
    if (response.status === 200){
      setData(response.data);
    }
  };

  const deletuser = async (id) => {
    if (
      window.confirm("Est ce que vous etes sûr d'effacer cet utilisateur ?")
    ) {
      const response = await axios.delete(`http://localhost:5000/users/deletuser/${id}`);
      if (response.status === 200){
        toast.success(response.data);
        getalluser();
      }
    }
  };

  console.log("data=>",data);
return(
  <div style={{marginTop: "150px"}}>
    <table className="styled-table">
      <thead>
        <tr>
          <th style={{textAlign: "center"}}>No.</th>
          <th style={{textAlign: "center"}}>Nom & Prenom</th>
          <th style={{textAlign: "center"}}>Email</th>
          <th style={{textAlign: "center"}}>Action</th>

        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => {
          return(
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                
                <button className="btn btn-delete" onClick={()=>
                  deletuser(item._id)
                }>
                  Effacer
                </button>
                
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
);
}

export default Users;
