import { GridLoader } from "./Loaders";

export default function FallbackLoader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <GridLoader.Component {...GridLoader.props} />
        </div>
    );
};