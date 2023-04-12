

export const notifyTimeUp = () => {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    showNotification();
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        showNotification();
      }
    });
  }
};

const showNotification = () => {
  const options = {
    body: 'Focus on an item approximately 20 feet away!',
    icon: '/eye.ico',
  };
  new Notification("Time up! Rest your eyes for 20 seconds!", options);
};
