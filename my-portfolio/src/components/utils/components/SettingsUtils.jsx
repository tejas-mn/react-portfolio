export const SettingsItem = ({ label, children }) => (
    <div className="settings-item">
        <p>{label}</p>
        {children}
    </div>
);

export const Checkbox = ({ checked, onChange, label }) => (
    <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
    </label>
);