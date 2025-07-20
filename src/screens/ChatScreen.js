import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { ChatContext } from '../context/ChatContext';
import { UserContext } from '../context/UserContext';
import { useTailwind } from 'tailwind-rn';
import { sendPushToUser } from '../api/api'; 


export default function ChatScreen({ route }) {
  const { users, sendMessage } = useContext(ChatContext);
  const { currentUser } = useContext(UserContext);
  const tw = useTailwind();
  const [text, setText] = useState('');
  const flatListRef = useRef(null);

  const otherUser = users.find((u) => u.id === route.params.userId);

  const messages = otherUser?.chats ?? [];

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={tw('flex-1 bg-white')}
      keyboardVerticalOffset={80}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={tw('p-4')}
        renderItem={({ item }) => {
          const isMe = item.sender === currentUser.id;
          return (
            <View
              style={tw(
                `mb-2 max-w-[75%] px-4 py-2 rounded-lg ${
                  isMe ? 'bg-blue-500 self-end' : 'bg-gray-200 self-start'
                }`
              )}
            >
              <Text style={tw(`${isMe ? 'text-white' : 'text-black'}`)}>{item.message}</Text>
              <Text style={tw(`text-xs ${isMe ? 'text-gray-100' : 'text-gray-500'}`)}>
                {item.timestamp}
              </Text>
            </View>
          );
        }}
      />

      <View style={tw('flex-row items-center px-4 py-3 border-t border-gray-200')}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type a message"
          style={tw('flex-1 bg-gray-100 px-4 py-2 rounded-full mr-2')}
        />
        <Pressable
          onPress={() => {
            if (text.trim()) {
              sendMessage(otherUser.id, text, otherUser.isGroup);
              setText('');
            }
          }}
          style={tw('bg-blue-600 px-4 py-2 rounded-full')}
        >
          <Text style={tw('text-white font-semibold')}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
