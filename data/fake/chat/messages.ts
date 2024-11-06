import { Person, TMessage } from "../../../types/messages";
const handlePreviousMessageUserId = (messages: TMessage[]) => {
  return messages.map((message, index) => {
    if (index > 0) {
      message.previousMessageUserId = messages[index - 1].senderId;
      return message;
    }
    message.previousMessageUserId = "";
    return message;
  });
};
export const message2x2: TMessage[] = handlePreviousMessageUserId([
  {
    message: "Hi John! How are you?",
    senderId: "user2",
    timestamp: 1648464763000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "I'm doing well, thanks! How about you?",
    senderId: "user1",
    timestamp: 1648464805000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },

  {
    message: "Hi John! How are you?",
    senderId: "user2",
    timestamp: 1648464763000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm doing well, thanks! How about you?",
    senderId: "user1",
    timestamp: 1648464805000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hi John! How are you?",
    senderId: "user2",
    timestamp: 1648464763000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm doing well, thanks! How about you?",
    senderId: "user1",
    timestamp: 1648464805000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hi John! How are you?",
    senderId: "user2",
    timestamp: 1648464763000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "I'm doing well, thanks! How about you?",
    senderId: "user1",
    timestamp: 1648464805000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hi John! How are you?",
    senderId: "user2",
    timestamp: 1648464763000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "I'm doing well, thanks! How about you?",
    senderId: "user1",
    timestamp: 1648464805000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hi John! How are you?",
    senderId: "user2",
    timestamp: 1648464763000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "I'm doing well, thanks! How about you?",
    senderId: "user1",
    timestamp: 1648464805000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user2",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hello there!",
    senderId: "user1",
    timestamp: 1648464721000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hello there!",
    senderId: "user1",
    timestamp: 1648464721000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hello there!",
    senderId: "user1",
    timestamp: 1648464721000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hello there!",
    senderId: "user1",
    timestamp: 1648464721000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "",
  },
  {
    message: "I'm good too, thanks for asking!",
    senderId: "user2",
    timestamp: 1648464857000,
    username: "Jane Smith",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "user1",
  },
  {
    message: "Hello there!",
    senderId: "user1",
    timestamp: 1648464721000,
    username: "John Doe",
    senderImage: "/assets/messages/random.png",
    previousMessageUserId: "",
  },
]);

// method that handle the prevoius message user id
export const persons: Person[] = [
  {
    id: "user1",
    username: "JohnDoe",
    title: "Mr.",
    image: "/assets/messages/random.png",
    isOnline: true,
    lastMessage: "How's it going?",
    lastMessageTime: "2024-03-28T10:00:00Z",
  },
  {
    id: "user2",
    username: "JaneSmith",
    title: "Ms.",
    image: "/assets/messages/random.png",
    isOnline: false,
    lastMessage: "Doing good, thanks!",
    lastMessageTime: "2024-03-28T10:05:00Z",
  },
  {
    id: "user3",
    username: "MikeJohnson",
    title: "Dr.",
    image: "https://example.com/user3.jpg",
    isOnline: true,
    lastMessage: "Hey, what's up?",
    lastMessageTime: "2024-03-28T10:10:00Z",
  },
  {
    id: "user1",
    username: "JohnDoe",
    title: "Mr.",
    image: "/assets/messages/random.png",
    isOnline: true,
    lastMessage: "How's it going?",
    lastMessageTime: "2024-03-28T10:00:00Z",
  },
  {
    id: "user2",
    username: "JaneSmith",
    title: "Ms.",
    image: "/assets/messages/random.png",
    isOnline: false,
    lastMessage: "Doing good, thanks!",
    lastMessageTime: "2024-03-28T10:05:00Z",
  },
  {
    id: "user3",
    username: "MikeJohnson",
    title: "Dr.",
    image: "https://example.com/user3.jpg",
    isOnline: true,
    lastMessage: "Hey, what's up?",
    lastMessageTime: "2024-03-28T10:10:00Z",
  },
  {
    id: "user1",
    username: "JohnDoe",
    title: "Mr.",
    image: "/assets/messages/random.png",
    isOnline: true,
    lastMessage: "How's it going?",
    lastMessageTime: "2024-03-28T10:00:00Z",
  },
  {
    id: "user2",
    username: "JaneSmith",
    title: "Ms.",
    image: "/assets/messages/random.png",
    isOnline: false,
    lastMessage: "Doing good, thanks!",
    lastMessageTime: "2024-03-28T10:05:00Z",
  },
  {
    id: "user3",
    username: "MikeJohnson",
    title: "Dr.",
    image: "https://example.com/user3.jpg",
    isOnline: true,
    lastMessage: "Hey, what's up?",
    lastMessageTime: "2024-03-28T10:10:00Z",
  },
  {
    id: "user1",
    username: "JohnDoe",
    title: "Mr.",
    image: "/assets/messages/random.png",
    isOnline: true,
    lastMessage: "How's it going?",
    lastMessageTime: "2024-03-28T10:00:00Z",
  },
  {
    id: "user2",
    username: "JaneSmith",
    title: "Ms.",
    image: "/assets/messages/random.png",
    isOnline: false,
    lastMessage: "Doing good, thanks!",
    lastMessageTime: "2024-03-28T10:05:00Z",
  },
  {
    id: "user3",
    username: "MikeJohnson",
    title: "Dr.",
    image: "https://example.com/user3.jpg",
    isOnline: true,
    lastMessage: "Hey, what's up?",
    lastMessageTime: "2024-03-28T10:10:00Z",
  },
  {
    id: "user1",
    username: "JohnDoe",
    title: "Mr.",
    image: "/assets/messages/random.png",
    isOnline: true,
    lastMessage: "How's it going?",
    lastMessageTime: "2024-03-28T10:00:00Z",
  },
  {
    id: "user2",
    username: "JaneSmith",
    title: "Ms.",
    image: "/assets/messages/random.png",
    isOnline: false,
    lastMessage: "Doing good, thanks!",
    lastMessageTime: "2024-03-28T10:05:00Z",
  },
  {
    id: "user3",
    username: "MikeJohnson",
    title: "Dr.",
    image: "https://example.com/user3.jpg",
    isOnline: true,
    lastMessage: "Hey, what's up?",
    lastMessageTime: "2024-03-28T10:10:00Z",
  },
  {
    id: "user1",
    username: "JohnDoe",
    title: "Mr.",
    image: "/assets/messages/random.png",
    isOnline: true,
    lastMessage: "How's it going?",
    lastMessageTime: "2024-03-28T10:00:00Z",
  },
  {
    id: "user2",
    username: "JaneSmith",
    title: "Ms.",
    image: "/assets/messages/random.png",
    isOnline: false,
    lastMessage: "Doing good, thanks!",
    lastMessageTime: "2024-03-28T10:05:00Z",
  },
  {
    id: "user3",
    username: "MikeJohnson",
    title: "Dr.",
    image: "https://example.com/user3.jpg",
    isOnline: true,
    lastMessage: "Hey, what's up?",
    lastMessageTime: "2024-03-28T10:10:00Z",
  },
];
