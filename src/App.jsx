import {useState} from 'react'
import './App.css'

function App() {
    const eightBallResponses = [
        // 10 Affirmative Answers
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        // 5 Neutral Answers
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        // 5 Negative Answers
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ]
    const [responseIndex, setResponseIndex] = useState(0)

    return (
        <>
            <div>
                <p>Ask the Magic 8 Ball a question then click the button below for an answer</p>
            </div>
            <div className="card">
                <button onClick={() => setResponseIndex(() => Math.floor(Math.random() * eightBallResponses.length))}>
                    The 8 Ball's response is ... {eightBallResponses[responseIndex]}
                </button>
            </div>
        </>
    )
}

export default App
