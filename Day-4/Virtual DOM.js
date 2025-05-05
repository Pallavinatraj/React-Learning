function trick() {
    const element = (
        <div>
            <h1>
                Hello World!
            </h1>
            <h2>
                It is {new Data().toLocaleTimeString()}.
            </h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
}
setInterval(trick, 1000);