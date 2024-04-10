const CrewDescription = ({name, role, bio}) => (
    <article className="crew-details flow">
        <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{role}</h2>
            <h1 className="fs-700 uppercase ff-serif">{name}</h1>
        </header>
        <p>{bio}</p>
    </article>
);

export default CrewDescription;