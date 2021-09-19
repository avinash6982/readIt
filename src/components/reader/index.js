function ReaderComponent({fileURL}) {

    return (
        <iframe width="100%" height="100%" src={fileURL} title="title">
            Presss me: <a href={fileURL}>Download PDF</a>
        </iframe>
    );
}

export default ReaderComponent