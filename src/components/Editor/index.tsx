import { marked } from 'marked';
import React, { ChangeEventHandler, useState } from 'react';
import { FiEdit2, FiEye } from 'react-icons/fi';

interface EditorProps {
    title: string;
    description: string;
    placeholder?: string;
}

const Editor: React.FC<EditorProps> = ({ title, description, placeholder }) => {

    const [editorMode, setEditorMode] = useState<boolean>(true);
    const [textValue, setTextValue] = useState<string>('');
    const [parsedMD, setParsedMD] = useState<string>('');

    const ChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
        setTextValue(target.value);
        const parsed = marked(target.value, {
            sanitize: true,
        });
        setParsedMD(parsed);
    };

    return (
        <div className="space-y-2">
            <div className="flex flex-col w-full p-4 text-sm text-white placeholder:text-gray-400 border border-gray-800 rounded-lg bg-gray-800">

                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                    <div>
                        <h1 className="text-xl font-bold">{title}</h1>
                        <p className="text-sm text-gray-300 line-clamp-1">{description}</p>
                    </div>
                    <button type="button" onClick={() => setEditorMode(!editorMode)} className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
                        {editorMode ? <FiEye /> : <FiEdit2 />}
                    </button>
                </div>

                <div className="py-2">
                    {editorMode && (
                        <textarea
                            placeholder={placeholder}
                            value={textValue}
                            onChange={ChangeTextarea}
                            className="w-full h-80 bg-transparent border-none outline-none resize-none"
                        />
                    )}
                    
                    {!editorMode && (
                        <div className="block w-full h-80 overflow-y-scroll">
                            <div
                                className="editor-markdown block"
                                dangerouslySetInnerHTML={{ __html: parsedMD }}
                            />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Editor;