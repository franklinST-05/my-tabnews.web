import { marked } from 'marked';
import React, { ChangeEventHandler, useState } from 'react';
import { FiEdit2, FiEye } from 'react-icons/fi';

const Editor: React.FC = () => {

    const [article, setArticle] = useState<string>('');
    const [md, setMd] = useState<string>('');

    const change:ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
        setArticle(target.value);
        const parsed = marked(target.value, {
            sanitize: true,
        });
        setMd(parsed);
    };
    const [editorMode, setEditorMode] = useState<boolean>(true);

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
                        value={article}
                        onChange={change}
                        className="w-full h-full bg-transparent border-none outline-none resize-none"
                    />
                )}

                {!editorMode && ( <div className="editor-markdown relative" dangerouslySetInnerHTML={{ __html:  md}}/> )}

            </div>
        </div>
    );
};

export default Editor;