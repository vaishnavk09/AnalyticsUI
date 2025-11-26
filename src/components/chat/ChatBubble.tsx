import React from 'react';
import { Bot, User } from 'lucide-react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
    message: string;
    isAi: boolean;
    timestamp: string;
}

const ChatBubble = ({ message, isAi, timestamp }: ChatBubbleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx(
                'flex gap-4 max-w-3xl',
                isAi ? 'mr-auto' : 'ml-auto flex-row-reverse'
            )}
        >
            <div
                className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                    isAi ? 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                )}
            >
                {isAi ? <Bot size={20} /> : <User size={20} />}
            </div>

        </motion.div>
    );
};

export default ChatBubble;
