
app.get("/deleteUserById", (req, res) => {
    let { id } = req.query;
    id = parseInt(id); // Convert id to a number

    let index = userData.findIndex(user => user.id === id);

    if (index !== -1) {
        userData.splice(index, 1); // Remove the user from the array
        res.send(User with ID ${id} deleted successfully.);
    } else {
        res.send("User not found.");
    }
});