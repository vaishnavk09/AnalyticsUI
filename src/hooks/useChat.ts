import { useState, useCallback } from 'react';
import { initialMessages, mockResponses } from '../data/messages';

interface Message {
    id: string;
    text: string;
    isAi: boolean;
    timestamp: string;
}

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = useCallback(async (text: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            text,
            isAi: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        // Simulate AI delay
        setTimeout(() => {
            const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                isAi: true,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsLoading(false);
        }, 1500);
    }, []);

    return {
        messages,
        isLoading,
        sendMessage
    };
};
