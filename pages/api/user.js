function UserHandler(req, res) {
  if (req.method === "POST") {
    // create user
  } else if (req.method === "PATCH") {
    // update user info
  } else if (req.method === "DELETE") {
    // delete a user
  } else {
    // retrieve a user info
  }
}

export default UserHandler;
