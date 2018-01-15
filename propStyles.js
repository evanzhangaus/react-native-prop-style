export default {
    //color
    blue: { color: '#3182C8' },
    cyan: { color: '#00AAAF' },
    green: { color: '#00A65F' },
    yellow: { color: '#E2902B' },
    orange: { color: '#D9644A' },
    red: { color: '#CF262F' },
    purple: { color: '#8B1079' },
    violet: { color: '#48217B' },
    black: { color: '#000000' },
    white: { color: '#ffffff' },

    //layout
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    column: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    centerH: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
    },
    centerV: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    padding: {
        padding: 10
    },
    paddingH: {
        paddingLeft: 10,
        paddingRight: 10
    },
    paddingV: {
        paddingTop: 10,
        paddingBottom: 10
    },
    margin: {
        margin: 10
    },
    marginH: {
        marginLeft: 10,
        marginRight: 10
    },
    marginV: {
        marginTop: 10,
        marginBottom: 10
    },

    //item
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 18,
    },
    link: {
        textDecorationLine: 'underline'
    },
    italic: {
        fontStyle: 'italic'
    }

}