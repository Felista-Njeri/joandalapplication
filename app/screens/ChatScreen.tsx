import * as React from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

function ChatScreen() {
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  React.useEffect(() => {
    const db = getDatabase();
    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const firebaseMessages = data ? Object.values(data) as IMessage[] : [];
      setMessages(firebaseMessages);
    });
  }, []);

  const onSend = (newMessages: IMessage[] = []) => {
    const db = getDatabase();
    newMessages.forEach((message) => {
      const messagesRef = ref(db, 'messages/' + message._id);
      set(messagesRef, {
        _id: message._id,
        text: message.text,
        createdAt: message.createdAt instanceof Date ? message.createdAt.getTime() : message.createdAt,

        user: message.user,
      });
    });
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: getAuth().currentUser?.uid || '1',
      }}
      inverted={false}
    />
  );
}

export default ChatScreen;
