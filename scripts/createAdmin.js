const addAdmin = async () => {
  const username = "admin";
  const password = "admin";
  const hashedPass = await generateHash(password);
  const result = await escapedQuery({
    sql: "INSERT INTO User (name, dob, username, password, role) VALUES (?, ?, ?, ?, ?)",
    values: ["admin", "2000-01-01", username, hashedPass, "admin"],
  });
  console.log(result);
  return result;
};

addAdmin()
  .then(() => {
    console.log("Admin created with username: admin and password: admin");
    console.log("Exiting...");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
