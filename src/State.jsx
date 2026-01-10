import { useState } from "react";

const scientists = [{
    id: 0,
    name: "Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculation",
}, {
    id: 1,
    name: "Mario Jose",
    profession: "chemist",
    accomplishment: "discovery of arctic ozone layer",
}, {
    id: 2,
    name: "Mohammad Salam",
    profession: "physicist",
    accomplishment: "electromagnatism theory",
}, {
    id: 3,
    name: "Percy Julian",
    profession: "chemist",
    accomplishment: "pioneering cortisone drugs, steroids and birth control",
}, {
    id: 4,
    name: "Subra Chand",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
},]

function Scientists() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let prevEnabled = index > 0;
    let nextEnabled = index < scientists.length - 1;

    function handlePrevClick() {
        if (prevEnabled) {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (nextEnabled) {
            setIndex(index + 1);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let scientist = scientists[index];

    return (
        <>
        <button onClick={handlePrevClick} disabled={!prevEnabled}>Prev</button>
        <button onClick={handleNextClick} disabled={!nextEnabled}>Next</button>
            <h2>{scientist.name}: <i>({scientist.profession})</i></h2>
            <h3>({index + 1} of {scientists.length})</h3>
            <button onClick={handleMoreClick}>{showMore ? "Hide": "Show"} Details</button>
            {showMore && <p>Known for {scientist.accomplishment}</p>}
        </>
    );
}


function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });

    const handleIncreaseAge = () => {
        setPerson({ ...person, age: person.age + 1 });
    }

    return (
        <>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase Age</button>
        </>
    );
}

function FeedbackForm() {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("typing");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        await(sendMessage(text));
        setStatus("sent");
    }

    const isSending = status === "sending";
    const isSent = status === "sent";

    if (isSent) {
        return <h1>Thank You for Your Feedback!</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>How Was Your Stay at The Prancing Pony?</p>
            <textarea 
              disabled={isSending}
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <br />
            <button 
              disabled={isSending}
              type="submit">Send</button>
              {isSending && <p>Sending...</p>}
        </form>
    );
}

function sendMessage(text) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

function MovingDot() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    return (
        <div
          onPointerMove={e => {
            setPosition({
                // ...position, You copy only when you want to change one or few variables rather than all
                x: e.clientX,
                y: e.clientY
            });
          }}
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            backgroundColor: "pink"
          }}
        >
            <div 
              style={{
                width: 20,
                height: 20,
                backgroundColor: "red",
                borderRadius: "50%",
                position: "absolute",
                top: -10,
                left: -10,
                transform: `translate(${position.x}px, ${position.y}px)`,
              }} />
        </div>
    );
}

const initialItems = [{
    id: 0,
    title: "pretzels",
}, {
    id: 1,
    title: "crispy seaweed",
}, {
    id: 2,
    title: "granola bar",
},];

function Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);

    const selectedItem = items.find(item => item.id === selectedId);

    function handleItemChange(id, e) {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value,
                };
            } else {
                return item;
            }
        }))
    }

    return (
        <>
            <h2>What's Your Travel Snack?</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        <input value={item.title} onChange={e => {
                            handleItemChange(item.id, e)
                        }} />
                    <button onClick={() => {
                        setSelectedId(item.id);
                    }}>Choose</button>
                    </li>
                ))}
            </ul>
            <p>You picked {selectedItem.title}</p>
        </>
    );
}

function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>Show</button>
            )}
        </section>
    );
}

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <h2>Almity, Kazakhstan</h2>
            <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
                With a population of about 2 million people.
            </Panel>
            <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                The word comes from the word "Apple".
            </Panel>
        </>
    );
}

export { Scientists, Person, FeedbackForm, MovingDot, Menu, Accordion }