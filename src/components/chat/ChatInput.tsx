import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

interface ChatInputProps {
    onSend: (message: string) => void;
    isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask for insights about your data..."
                    className="w-full pl-12 pr-14 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-lg shadow-slate-200/50 dark:shadow-none text-slate-900 dark:text-white placeholder-slate-400"
                    disabled={isLoading}
                />
                <div className="absolute left-4 text-cyan-500">
                    <Sparkles size={20} />
                </div>
                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-3 p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send size={18} />
                </button>
            </div>
        </form>
    );
};

export default ChatInput;
