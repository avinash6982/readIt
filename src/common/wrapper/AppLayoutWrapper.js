import ZeroPaddingWrapper from "./ZeroPaddingWrapper";

function AppLayoutWrapper(props) {

    return (
        <ZeroPaddingWrapper
            styles={{
                display: "grid",
                gridTemplateColumns: "25% 1fr",
                height: "calc(100vh - 3em)"
            }}>
            <ZeroPaddingWrapper
                styles={{
                    backgroundColor: "#989595",
                    padding: "20px"
                }}>
                {props.sidebarComponent}
            </ZeroPaddingWrapper>
            <ZeroPaddingWrapper>
                {props.mainComponent}
            </ZeroPaddingWrapper>
        </ZeroPaddingWrapper>
    );
}

export default AppLayoutWrapper