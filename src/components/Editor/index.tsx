import { marked } from 'marked';
import React, { ChangeEventHandler, ReactNode, useState } from 'react';
import { FiEdit2, FiEye } from 'react-icons/fi';
import Button from '../Button';


interface EditorProps {
    title: string;
    description: string;
    placeholder?: string;
    actions?: ReactNode;
}

const Editor: React.FC<EditorProps> = ({ title, description, placeholder, actions }) => {

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
            <div className="flex flex-col w-full p-4 pb-0 text-sm text-white placeholder:text-gray-400 border border-gray-800 rounded-lg bg-gray-800">

                <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-xl font-bold">{title}</h1>
                            <p className="text-sm text-gray-300 line-clamp-1">{description}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 transition-all">
                        {actions}
                        <Button
                            size="small"
                            onClick={() => setEditorMode(!editorMode)}
                            className="!bg-gray-900"
                        >
                            {editorMode ? <FiEye /> : <FiEdit2 />}
                        </Button>
                    </div>
                </div>
    
                <div className="border-t border-gray-700 py-4">
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