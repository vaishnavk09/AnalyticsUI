import { useState, useCallback } from 'react';
import { initialMessages, mockResponses } from '../data/messages';



export const useChat = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = useCallback(async (text) => {
        const userMessage = {
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
            const aiMessage = {
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
