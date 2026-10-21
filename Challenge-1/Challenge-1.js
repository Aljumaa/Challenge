const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

function werOnline(users) {
  let result = {
    online: [],
    away: [],
    offline: []
  };
  for (const user of users) {const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

function werOnline(users) {
  let result = {
    online: [],
    away: [],
    offline: []
  };
  for (const user of users) {
    if (user.status === "offline") {
      result.offline.push(user.username);
    } else if (
      user.status === "away" || (user.status === "online" && user.lastActivity > 10)){
      result.away.push(user.username);
    } else if (
      user.status === "online" && user.lastActivity <= 10) {
      result.online.push(user.username);
    }
  }
  return result;
}

console.log(werOnline(users));
    if (user.status === "offline") {
      result.offline.push(user.username);
    } else if (
      user.status === "away" || (user.status === "online" && user.lastActivity > 10)){
      result.away.push(user.username);
    } else if (
      user.status === "online" && user.lastActivity <= 10) {
      result.online.push(user.username);
    }
  }
  return result;
}

console.log(werOnline(users));