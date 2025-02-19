import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Chat = (props) => {
  const { room, signUserOut } = props;
  const [newMessage, setNewMessage] = useState("");
  const messageRef = collection(db, "messages");

  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.trim() === "") return; // Prevent empty messages

    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe(); // Cleanup function
  }, [room]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">{room}</h2>
        <button onClick={signUserOut}>SignOut</button>
      </div>

      <div className="p-4 flex-1 overflow-y-auto space-y-2 bg-gray-50">
        {messages.map((message) => {
          const isCurrentUser = message.user === auth.currentUser.displayName;
          return (
            <div
              key={message.id}
              className={`flex ${
                isCurrentUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-2 rounded-lg max-w-xs ${
                  isCurrentUser
                    ? "bg-white text-slate-900 shadow-sm self-end hover:bg-orange-300 hover:shadow-md transition-colors duration-300"
                    : "bg-slate-800 text-white self-start"
                }`}
              >
                <span
                  className={`text-sm block ${
                    isCurrentUser ? "text-gray-400" : "text-orange-500"
                  }`}
                >
                  {message.user}
                </span>
                <p className="font-semibold">{message.text}</p>
              </div>
            </div>
          );
        })}
        <form
          onSubmit={handleSubmit}
          className="mt-4 relative flex items-center"
        >
          <input
            type="text"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
            className="border p-3 pr-12 rounded-full flex-1"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="absolute right-2 bg-blue-500 text-white px-4 py-2 rounded-full 
      disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
