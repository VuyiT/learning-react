function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function Profile({ name, profession, awards, discovery }) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>
                    ({awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovery}
                </li>
            </ul>
        </section>
    );
}

function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile name="Marie Curie" profession="chemist" discovery="polonium" awards={[
                'Nobel Prize in Physics',
            ]} />
        </div>
    );
}

export { Gallery }