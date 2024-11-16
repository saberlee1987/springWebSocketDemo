package com.saber.springwebsocketdemo;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
@Component
public class SocketTextHandler extends TextWebSocketHandler {
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("session id "+session.getId()+" connected");
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        super.handleTextMessage(session,message);
        String payload = message.getPayload();
        System.out.printf("session %s send message %s%n", session.getId(),payload);
        session.sendMessage(new TextMessage(String.format("thank you your message is %s",payload)));
    }
}
