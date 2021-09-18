export default function Icon({ iconName, title }) {

    return (
        <i style={{ fontSize: 25 }} className={iconName} title={title} aria-hidden="true"></i>
    );
}