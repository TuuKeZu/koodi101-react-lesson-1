function App() {
    return (
        <h1>Hello From React</h1>
    )
}

function Variable() {
    let kana = "kissa"
    return (
        <h1>{kana}</h1>
    )
}

function Greetings() {
    let greetings = [
        'Hello',
        'Hi',
        'Bye',
        'Goodbye'
    ]

    return (
        <>
            { 
                greetings.map( function(greeting) {
                    return <p>{greeting}</p>
                })
            }
        </>
    )
}

function HelloElement() {
    return <h1>Hello World</h1>
}

function App() {
    return <HelloElement />
}