export default function FallbackLoader({loader}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
           {<loader.Component {...loader.props} /> }
        </div>
    );
};