import { useState } from 'react';

export const AuthPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (username: string, password: string) => {
        // const resp = await authenticate(username,password);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(username, password);
        setUsername('');
        setPassword('');
    }
    return (
        <>
            <h1>AuthPage</h1>
            <form className='form-container'>
                <h3>Username</h3>
                <input autoComplete='off' type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                <h3>Password</h3>
                <input autoComplete='off' type="password" name="username" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Ser Infeliz</button>
            </form>
        </>

    )
}
