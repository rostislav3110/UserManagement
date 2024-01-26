import React, { useState } from "react";
import styleList from "../style/userListStyle.module.css";

function UserList({ users, onEditUser, onDeleteUser }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedUser(users[index]);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditedUser({ name: "", email: "", phone: "" });
  };

  const handleSaveEdit = () => {
    onEditUser(editIndex, editedUser);
    setEditIndex(null);
    setEditedUser({ name: "", email: "", phone: "" });
  };

  const handleDeleteClick = (index) => {
    onDeleteUser(index);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styleList.list}>
      <h2>User List</h2>
      <label>
        Search by Last Name:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <ul className={styleList.listBlock}>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                  />
                </label>
                <br />
                <label>
                  E-mail:
                  <input
                    type="email"
                    value={editedUser.email}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                  />
                </label>
                <br />
                <label>
                  Phone:
                  <input
                    type="text"
                    value={editedUser.phone}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, phone: e.target.value })
                    }
                  />
                </label>
                <br />
                <button className={styleList.btnStatic} onClick={handleSaveEdit}>Save</button>
                <button className={styleList.btnStaticDel} onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className={styleList.users}>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <button className={styleList.btnStatic} onClick={() => handleEditClick(index)}>Edit</button>
                <button className={styleList.btnStaticDel} onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
