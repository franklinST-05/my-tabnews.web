import { marked } from 'marked';
import React, { ChangeEventHandler, useState } from 'react';
import { FiEdit2, FiEye } from 'react-icons/fi';

const Editor: React.FC = () => {

    const [editorMode, setEditorMode] = useState<boolean>(true);
    const [textValue, setTextValue] = useState<string>('');
    const [parsedMD, setParsedMD] = useState<string>('');

    const ChangeTextarea:ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
        setTextValue(target.value);
        const parsed = marked(target.value, {
            sanitize: true,
        });
        setParsedMD(parsed);
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-end">
                <button type="button" onClick={() => setEditorMode(!editorMode)} className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    { editorMode ? <FiEye/> : <FiEdit2/> }
                </button>
            </div>
            <div className=" block w-full h-96 p-4 text-sm text-white placeholder:text-gray-400 border border-gray-800 rounded-lg bg-gray-800">

                {editorMode && (
                    <textarea
                        placeholder="Artigo"
                        value={textValue}
                        onChange={ChangeTextarea}
                        className="w-full h-full bg-transparent border-none outline-none resize-none"
                    />
                )}

                {!editorMode && ( <div className="editor-markdown relative" dangerouslySetInnerHTML={{ __html:  parsedMD}}/> )}

            </div>
        </div>
    );
};

export default Editor;