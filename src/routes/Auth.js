import {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email"){
            setEmail(value)
        }else if(name === "password"){
            setPassword(value)
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value="Log In"/>
            </form>
            <div>
                <button>Contine with Google</button>
                <button>Contine with Github</button>
            </div>
        </div>
    )
}

export default Auth;