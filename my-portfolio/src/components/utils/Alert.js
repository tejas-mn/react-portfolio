import { useAlert } from '../../Providers/AlertProvider';

function Alert({ alertObj }) {
    const { hideAlert } = useAlert();

    return <div key={alertObj.id}
        style={{
            top: alertObj.id * 50 + "px",
            backgroundColor: bg[alertObj.type]
        }}
        className="alert" role="alert">
        <strong style={{
            color: 'white'
        }}>{alertObj.message}</strong>
        <button type="button" className="btn-close" onClick={() => hideAlert(alertObj.id)} aria-label="Close"><strong style={{
            color: 'white'
        }}>✖</strong></button>
    </div>
}

function AlertMessages() {
    const { alerts } = useAlert();

        return <>
            {
                alerts.map((alertObj, index) => <Alert  key={alertObj} alertObj={{ ...alertObj, id: index }} />)
            }
        </>
}

const bg = {
    warning: "#ffa143",
    success: "#6aa164",
    error: "#FF2424"
}

export default AlertMessages;