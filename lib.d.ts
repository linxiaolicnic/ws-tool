declare interface Window {
    RTCPeerConnection: RTCPeerConnection;
}
declare interface RTCDataChannel {
    readyState: "open" | "close";
    onopen: (event: any) => void;
    onclose: (event: any) => void;
    onmessage: (event: MessageEvent) => void;
    send(message: string): void;
    close(): void;
}
declare interface RTCPeerConnection {
    ondatachannel: (event: { channel: RTCDataChannel }) => void;
    createDataChannel(channel: string): RTCDataChannel;
}