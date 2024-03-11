function SongContainer({title, style, children}) {
    return (
        <div className={(style) ? style.SongContainer : ""}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default SongContainer;