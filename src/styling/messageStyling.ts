const messageStyles = {
  messageTailSender: {
    position: "absolute",

    bottom: 0,
    right: -7,
    width: 20,
    height: 25,
    backgroundColor: "#1689FF",
    borderBottomLeftRadius: "16px 14px",
  },
  messageTailOverlapSender: {
    position: "absolute",

    bottom: 0,
    right: -26,
    width: 26,
    height: 25,
    backgroundColor: "#fff",
    borderBottomLeftRadius: "10px",
  },
  messageTailReceiver: {
    position: "absolute",

    bottom: 0,
    left: -7,
    width: 20,
    height: 25,
    backgroundColor: "#E5E5EA",
    borderBottomRightRadius: "16px 14px",
  },
  messageTailOverlapReceiver: {
    position: "absolute",

    bottom: 0,
    left: -26,
    width: 26,
    height: 25,
    backgroundColor: "#ffff",
    borderBottomRightRadius: "10px",
  },
};

export { messageStyles };
