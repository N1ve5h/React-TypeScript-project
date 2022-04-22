interface Props {
    country: {
        name: String;
        nativeName: String;
        population: number;
        region: String;
        subregion: String;
        capital: String;
        topLevelDomain: String;
        currencies: String;
        languages: Array<String>;
        borders: Array<String>;
        flags: {svg: string};
    }
}

export const Card: React.FC<Props> = ({country}) => {
    return (
        <div className="card">
            <img src={country['flags']['svg']} alt="" />
            <h1 className="title">{country['name']}</h1>
            <p><b>Population: </b>{country['population'].toLocaleString()}</p>
            <p><b>Region: </b>{country['region']}</p>
            <p><b>Capital: </b>{country['capital']}</p>
        </div>
    )
}