import { TableBody, TableCell, TableRow, TableHead, Table, TableContainer, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Protected from "../components/Protected";
import * as Firebase from "../utils/firebase";

function Users() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {

        const users = await Firebase.getUsers();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, [])


    return <Protected>
        <Container>
            <div className="userslist">
            <h2>Lista de usuarios de la web</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.email}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="user">
                                    {user.email}
                                </TableCell>
                                <TableCell align="right">{user.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </Container>
    </Protected>
}

export default Users;