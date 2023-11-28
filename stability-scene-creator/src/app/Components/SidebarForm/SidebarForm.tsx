"use client";
import React, { useState } from 'react';
import TextPrompt from '../TextPrompt/TextPrompt';
import Canvas from '../Canvas/Canvas';

interface formProps {
    
}

const SidebarForm = () => {
    const [formData, setFormData] = useState<any>(null);

    const handleFormData = (formData: any) => {

    };

    return (
        <form> 
            <TextPrompt label="Prompt" id="prompt" name="prompt">TEXT</TextPrompt>
            <Canvas />
        </form>
    );
};

export default SidebarForm;