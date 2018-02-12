const Fac = ({ children }) => (
    <div>
        <h1>One</h1>
        {children({ number: 1 })}
    </div>
);

const PrettyNumber = () => (
    <Fac>
        {({ number }) => (
            <span style={{ color: "#E52B50", fontSize: "2em" }}>{number}</span>
        )}
    </Fac>
);

ReactDOM.render(<PrettyNumber />, document.getElementById("root"));
