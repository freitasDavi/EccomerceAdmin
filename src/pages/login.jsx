import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls';

const Login = () => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    const handleLogin = (event) => {
        event.preventDefault();

        login(dispatch, { username: user, password: password});
    };

    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <input style={{ padding: 10, marginBottom: 20}} type="text" placeholder="username" onChange={(event) => setUser(event.target.value)} />
            <input style={{ padding: 10, marginBottom: 20}} type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
            <button style={{ padding: 10, width: 100}} onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;