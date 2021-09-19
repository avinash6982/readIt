import ZeroPaddingWrapper from "../../common/wrapper/ZeroPaddingWrapper";
import AddDocument from "./AddNewDocument";

function SidebarComponent(props) {

    return (<>
        <ZeroPaddingWrapper>
            <ZeroPaddingWrapper
                styles={{
                    height: "100%",
                    maxHeight: "55vh",
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "auto"
                }}>
                <h5>{props.username}'s documents</h5>
                <hr />
                {
                    Object.values(props.documents)
                        .map((item, index) =>
                            <ZeroPaddingWrapper key={index} styles={{ padding: ".5em" }}>
                                <div className="documentName">
                                    <label onClick={() => props.openReader(item)}>{index + 1}. {item.name} </label>
                                    <i
                                        onClick={() => props.removeDocument(index)}
                                        style={{ float: "right", padding: "5px" }}
                                        className="fa fa-trash"
                                        title="signout"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </ZeroPaddingWrapper>
                        )
                }
            </ZeroPaddingWrapper>
            <hr />
            <AddDocument addDocument={props.addDocument} />
        </ZeroPaddingWrapper>
    </>);
}

export default SidebarComponent