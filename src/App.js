import { useState } from "react";
import UserForm from "./components/userForm";
import UserList from "./components/userList";

function App() {

  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user])
  }

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleEditUser = (index, editedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = editedUser;
    setUsers(updatedUsers);
  };


  return (
    <div className="App">
       <h1>User Management System</h1>
       <UserForm addUser={addUser}/>
       <UserList users={users} onEditUser={handleEditUser}  onDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;
