import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../store/slices/UserDetails";
import fetchDetails from "../api/fetchData";

function UserDetails() {
  const dispatch = useDispatch();

  const handleAddUser = (payload) => {
    dispatch(addUser(payload));
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const data = useSelector((state) => {
    return state.users;
  });

  return (
    <div>
      <div>
        <button
          className="btn-adduser"
          onClick={() => handleAddUser(fetchDetails())}
        >
          Add User{" "}
        </button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {data &&
          data.map((item, id) => {
            return (
              <li className="list-user" key={id}>
                <label>{item}</label>
                <button
                  className="btn-delete"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  {" "}
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default UserDetails;
