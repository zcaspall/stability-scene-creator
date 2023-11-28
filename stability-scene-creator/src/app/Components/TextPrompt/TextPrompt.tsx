"use client";

interface promptProps {
    label: string;
    id: string;
    name: string;
    children: React.ReactNode
}

const TextPrompt = ({ label, id, name, children }: promptProps) => {
    return (
        <>
            <label>{label}</label>
            <textarea id={id} name={name} >{children}</textarea>
        </>
    );
}

export default TextPrompt