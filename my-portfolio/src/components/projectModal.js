import { useAutoBoldText } from "../Providers/customHooks";

export default function ProjectModal ({ imageUrl, title, description, tags }) {
    useAutoBoldText();
    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src={imageUrl} alt={title} style={styles.image} />
              
            </div>
            <div style={styles.contentContainer}>
                <h2 style={styles.title}>🚀 {title}</h2>
                <p style={styles.description} className="auto-format">{description}</p>
                <div style={styles.tagContainer}>
                    {tags.map((tag, index) => (
                        <span key={index} style={styles.tag}>{tag}</span>
                    ))}
                </div>
                <div style={styles.buttonContainer}>
                    <button style={styles.button}>Github ↗</button>
                    <button style={styles.button}>Live ↗</button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        gap: '20px',
        flexDirection: 'row',
        textAlign: 'left',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
       
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'50%'
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: 'rgba(74, 74, 74, 0.23) -7px -10px 30px'
    },
    buttonContainer: {
        marginTop: '20px',
    },
    contentContainer: {
        width:'50%'
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
        marginTop: '10px',
    },
    description: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    tagContainer: {
        marginBottom: '10px',
    },
    tag: {
        display: 'inline-block',
        backgroundColor: 'rgb(219 219 219 / 32%)',
        color: '#333',
        padding: '5px 10px',
        borderRadius: '4px',
        marginRight: '5px',
    },
    button: {
        padding: '8px 16px',
        marginRight: '10px',
        backgroundColor: '#ffffff',
        color: '#333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        boxShadow: '0px 0px 10px rgba(74, 74, 74, 0.127)'
    },
}