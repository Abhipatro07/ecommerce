import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AdminAccount() {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="info" id="dropdown-basic">
      <AccountCircleIcon/>Account
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/viewAdmin">Account Info</Dropdown.Item>
      <Dropdown.Item href="/updateadmin">Update Account</Dropdown.Item>
      <Dropdown.Item href="/">Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default AdminAccount
