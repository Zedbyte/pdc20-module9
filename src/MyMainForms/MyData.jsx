import React, {useState, useEffect} from 'react'

function MyData() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    // Functions to fetch data using API
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/pdc20/get_user.php', {
                method: 'GET',
                // headers: {
                //     'Content-Type':'application/json'
                // },
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            setUsers(data);
        }
        catch (err) {
            setError(err.message);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        <div className="container py-4">
    <h1 className="mb-4">User List</h1>

    {error && <p className="text-danger">Error: {error}</p>}
    {users.length > 0 ? (
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th className="bg-primary text-white">ID</th>
                    <th className="bg-primary text-white">Name</th>
                    <th className="bg-primary text-white">Gender</th>
                    <th className="bg-primary text-white">Contact</th>
                    <th className="bg-primary text-white">Address</th>
                    <th className="bg-primary text-white">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.contact}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p>No users found.</p>
    )}
</div>

    );
}

export default MyData;