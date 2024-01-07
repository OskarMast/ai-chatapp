export declare class ChatController {
    receiveMessage(body: {
        userMessage: string;
    }): Promise<{
        botResponse: string;
    }>;
    private generateResponse;
}
