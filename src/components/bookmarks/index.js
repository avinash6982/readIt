import ZeroPaddingWrapper from "../../common/wrapper/ZeroPaddingWrapper";

function BookmarksComponent(props) {

    return (<>
        <h5>{props.username}'s documents</h5>
        <hr />
        {
            Object.values(props.documents)
                .map(item =>
                    <ZeroPaddingWrapper styles={{}}>
                        <div onClick={() => props.openReader()}>
                            {item.id}. {item.name}
                        </div>
                    </ZeroPaddingWrapper>
                )
        }
    </>);
}

export default BookmarksComponent