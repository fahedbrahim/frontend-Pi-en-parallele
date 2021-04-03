import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUsers } from "../../redux/slices/admin/usersSlice";


export default function Users() {
  const [users, err] = useSelector(selectUsers);
  console.log(users);

  
  return (
    <section>
      <div className="row">
        <div className="col-sm-1 col-md-2"></div>
        <div className="col-sm-10 col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>(
              <tr key={user._id}>
                <th scope="row">{index}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.adresse}</td>
                <td>{user.phone}</td>
                <td>
                  <span className="icon mr-3">
                    <Link to={`/homeuser/admin/update/${user._id}`}>
                    <i className="fa fa-pencil" style={{color : "green"}}></i>
                    </Link>
                  </span>
                  <span className="icon">
                    <i className="fa fa-trash" style={{color : "red"}}></i>
                  </span>
                </td>
              </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col-sm-1 col-md-2"></div>
      </div>
    </section>
  );
}
