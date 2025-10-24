export default function Input({ type, id, value, name, onChange }: { type: string, id: string, value: string, name: string, onChange: (field: string, value: string) => void }) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}