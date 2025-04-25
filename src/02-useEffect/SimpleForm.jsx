import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'victor',
        email: 'lkj@lkj.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value // propiedades computadas de los objetos
        })
    }

    useEffect(() => {
        // console.log('useEffect called');
    }, []);

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed');
    }, [email]);


    return (
        <>
            <h1>Simple Form</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    name="username" 
                    value={username}
                    onChange={onInputChange}
                />

                <input 
                    type="email" 
                    className="form-control mt-2" 
                    placeholder="tuemail@tudominio.com" 
                    name="email" 
                    value={email}
                    onChange={onInputChange}
                />
            </div>

            {
                (username === 'victor2') && <Message />
            }
        </>
    )
}