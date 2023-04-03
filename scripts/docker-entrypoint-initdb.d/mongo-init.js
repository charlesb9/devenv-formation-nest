db.createUser(
  {
    user: "6Gi78F4uv",
    pwd: "H7Ym9L68",
    roles: [
      {
        role: "readWrite",
        db: "hma"
      }
    ]
  }
);

db.createCollection('init');
db.init.insertOne(
  {
    default: 'init'
  }
);