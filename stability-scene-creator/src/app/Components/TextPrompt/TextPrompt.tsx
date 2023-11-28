"use client";

interface promptProps {
    label: string;
    id: string;
    name: string;
}

const TextPrompt = ({ label, id, name }: promptProps) => {
    return (
        <>
            <label>{label}</label>
            <textarea id={id} name={name} ></textarea>
        </>
    );
}

export default TextPrompt