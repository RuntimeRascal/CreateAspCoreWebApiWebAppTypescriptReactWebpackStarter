const Index = () => {
    const [values, setValues] = React.useState(new Array());
    React.useEffect(() => {
        $.getJSON('https://localhost:5001/api/values', res => {
            if (res)
                setValues(res);
        });
    }, []);
    const onModValues = (e, remove = false) => {
        var newValues = values.slice();
        if (remove)
            newValues = newValues.slice(0, newValues.length - 1);
        else
            newValues.push((values.length + 1).toString());
        setValues(newValues);
    };
    return (React.createElement("div", { className: "container" },
        React.createElement("header", { className: "jumbotron" },
            React.createElement("h1", null, "A Simper Example Web App!")),
        React.createElement("main", null,
            React.createElement("p", null, "hello world..."),
            React.createElement("div", null,
                React.createElement("ul", null, values && values.map((v, i) => React.createElement("li", { key: i }, v))),
                React.createElement("button", { onClick: e => onModValues(e), className: "btn btn-outline-info" }, "add"),
                React.createElement("button", { style: { marginLeft: 10 }, onClick: e => onModValues(e, true), className: "btn btn-outline-info" }, "remove")))));
};
ReactDOM.render(React.createElement(Index, null), document.getElementById('react-root'));
