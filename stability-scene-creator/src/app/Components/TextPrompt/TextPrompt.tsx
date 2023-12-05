"use client";

interface promptProps {
    label: string;
    id: string;
    name: string;
    handlePrompt: (prompt: textPrompt) => void;
}

export interface textPrompt {
    text: string,
    weight: number,
}

const TextPrompt = ({ label, id, name, handlePrompt }: promptProps) => {
    const promptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let prompt: textPrompt = {
            text: event.target.value,
            weight: 1
        }
        
        handlePrompt(prompt);
    }
    return (
        <>
            <label>{label}</label>
            <textarea id={id} name={name} onChange={promptChange}></textarea>
        </>
    );
}

export default TextPrompt;
