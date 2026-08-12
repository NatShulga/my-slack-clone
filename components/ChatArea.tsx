'use client';

interface Message {
    id: number,
    user: string,
    text: string,
    time: string,
    isMine: boolean;
}

interface ChatAreaProps {
    activeChannel: string;
    messages: Message[];
}