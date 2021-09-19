import ZeroPaddingWrapper from "../../common/wrapper/ZeroPaddingWrapper";

function BookmarksComponent(props) {

    return (<>
        <h5>{props.username}'s documents</h5>
        <hr />
        {
            Object.values(props.documents)
                .map(item =>
                    <ZeroPaddingWrapper key={item.id} styles={{}}>
                        <div className="documentName" onClick={() => props.openReader(item)}>
                            {item.id}. {item.name}
                        </div>
                    </ZeroPaddingWrapper>
                )
        }
    </>);
}

export default BookmarksComponent