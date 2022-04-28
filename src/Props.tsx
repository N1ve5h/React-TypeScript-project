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

export default Props;