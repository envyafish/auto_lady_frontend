const Alert = ({ message, type, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div role="alert" className={`alert alert-p alert-${type}`}>
            <span>{message}</span>
        </div>
    );
};

export default Alert;