import ZeroPaddingWrapper from "../../common/wrapper/ZeroPaddingWrapper";

function ReaderComponent(props) {

    return (<>
        {
            props.content ?
                <iframe width="100%" height="100%" src={props.content.url} title="title">
                    Presss me: <a href={props.content.url}>Download PDF</a>
                </iframe> :
                <ZeroPaddingWrapper styles={{ display: "grid", placeItems: "center", height: "100%" }}>
                    <h6>Click on a document to open it</h6>
                </ZeroPaddingWrapper>
        }
    </>);
}

export default ReaderComponent