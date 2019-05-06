
const Index = () =>
{
    const [ values, setValues ] = React.useState( new Array<string>() );

    React.useEffect( () =>
    {
        $.getJSON( 'https://localhost:5001/api/values', res =>
        {
            if ( res )
                setValues( res );
        } );

    }, [] );

    const onModValues = ( e: React.MouseEvent<HTMLButtonElement>, remove = false ) =>
    {
        var newValues = values.slice();
        if ( remove )
            newValues = newValues.slice( 0, newValues.length - 1 );
        else
            newValues.push( ( values.length + 1 ).toString() );

        setValues( newValues );
    };

    return (
        <div className="container">
            <header className="jumbotron">
                <h1>A Simper Example Web App!</h1>
            </header>

            <main>
                <p>hello world...</p>

                <div>
                    <ul>
                        { values && values.map( ( v, i ) => <li key={ i }>{ v }</li> ) }
                    </ul>
                    <button onClick={ e => onModValues( e ) } className="btn btn-outline-info">add</button>
                    <button style={ { marginLeft: 10 } } onClick={ e => onModValues( e, true ) } className="btn btn-outline-info">remove</button>
                </div>
            </main>
        </div>
    );
}

ReactDOM.render( <Index />, document.getElementById( 'react-root' ) );