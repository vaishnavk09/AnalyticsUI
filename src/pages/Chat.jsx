import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import { useChat } from '../hooks/useChat';

const Chat = () => {
    const { messages, isLoading, sendMessage } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AI Insights Assistant</h1>
                <p className="text-slate-500 dark:text-slate-400">Ask questions about your data and get instant analysis.</p>
            </div>

            <div className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-sm">
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.map((msg) => (
                        <ChatBubble
                            key={msg.id}
                            message={msg.text}
                            isAi={msg.isAi}
                            timestamp={msg.timestamp}
                        />
                    ))}
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                        <ChatInput onSend={sendMessage} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
