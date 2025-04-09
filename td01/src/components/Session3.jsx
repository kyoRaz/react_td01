import {useRef, useState} from "react";

function FormWithUseState() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form>
            <h1>Création de compte</h1>
            <p>Vous avez entré {name} {email}</p>
            <input type="text" placeholder="Name"
                   onChange={(event) => {
                       setName(event.target.value)
                   }}/>
            <input type="email" placeholder="Email"
                   onChange={(event) => {
                       setEmail(event.target.value)
                   }}/>
            <button type="button">Submit</button>
        </form>
    )
}

function Item({name, email}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

function Items({items}) {
    return (
        <div>
            {items.map((item, index) => (
                <Item key={index} name={item.name} email={item.email}/>
            ))}
        </div>
    )
}

function FormWithRef() {
    const name = useRef()
    const email = useRef()

    const [items, setItems] = useState([])

    function onSubmit() {
        console.log(`Name: ${name.current.value}, Email: ${email.current.value}`)
        setItems([...items, {name: name.current.value, email: email.current.value}])
    }

    return (
        <form>
            <h1>Création de compte</h1>

            <input type="text" placeholder="Name" ref={name}/>
            <input type="email" placeholder="Email" ref={email}/>
            <button type="button" onClick={onSubmit}>Submit</button>

            <p>Vous avez entré {items.length}</p>
            <Items items={items}/>
        </form>
    )
}

function FormWithRefonParent() {
    const form = useRef()

    const [items, setItems] = useState([])

    function onSubmit(event) {
        event.preventDefault()
        let data = new FormData(form.current)
        console.log(data)
        setItems([...items, data])
    }

    return (
        <form ref={form} onSubmit={onSubmit}>
            <h1>Création de compte</h1>

            <input type="text" placeholder="Name" name="name"/>
            <input type="email" placeholder="Email" name="email"/>
            <button type="submit">Submit</button>

            <p>Vous avez entré {items.length}</p>
            <Items items={items}/>
        </form>
    )
}


export {FormWithUseState, FormWithRef, FormWithRefonParent}