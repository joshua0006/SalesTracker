import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const initialNotifications = [
  {
    id: 1,
    type: "info",
    message: "New feature: Dark mode is now available!",
    read: false,
  },
  {
    id: 2,
    type: "success",
    message: "Your last report was successfully generated.",
    read: false,
  },
  {
    id: 3,
    type: "warning",
    message: "Your subscription will expire in 3 days.",
    read: false,
  },
  {
    id: 4,
    type: "error",
    message: "Failed to sync data. Please try again.",
    read: false,
  },
  {
    id: 5,
    type: "info",
    message:
      "Scheduled maintenance: System will be down for upgrades on Saturday.",
    read: false,
  },
];

function NotificationItem({ notification, onMarkAsRead, onDelete }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } border-l-4 border-blue-500 p-4 mb-4 rounded shadow-md`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {!notification.read && (
            <span className="mr-2 text-2xl text-blue-500">•</span>
          )}
          <p className={`font-medium ${notification.read ? "opacity-50" : ""}`}>
            {notification.message}
          </p>
        </div>
        <div>
          {!notification.read && (
            <button
              onClick={() => onMarkAsRead(notification.id)}
              className={`text-sm underline mr-2 ${
                isDarkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              Mark as read
            </button>
          )}
          <button
            onClick={() => onDelete(notification.id)}
            className="text-sm text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function Notifications() {
  const { isDarkMode } = useTheme();
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const handleDeleteAll = () => {
    setNotifications([]);
  };

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      <div className="mb-4 flex justify-between items-center">
        <p>{notifications.length} notification(s)</p>
        <div>
          <button
            onClick={handleMarkAllAsRead}
            className={`mr-4 ${
              isDarkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            Mark all as read
          </button>
          <button
            onClick={handleDeleteAll}
            className={`${
              isDarkMode
                ? "text-red-400 hover:text-red-300"
                : "text-red-600 hover:text-red-700"
            }`}
          >
            Delete all
          </button>
        </div>
      </div>

      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkAsRead={handleMarkAsRead}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-8">No notifications</p>
      )}
    </div>
  );
}

export default Notifications;
