const generator = require("generate-password");
const bcrypt = require("bcrypt");

const generateRandomPass = () => {
  let password = generator.generate({
    length: 12,
    strict: true,
    excludeSimilarCharacters: true,
  });
  console.log("Password generated :" + password);
  return password;
};

const generate_hash = async (password) => {
  const saltRounds = 10;
  const hash = bcrypt.hash(password, saltRounds);
  return hash;
};

const comparePasswords = async (userPass, storedPass) => {
  return await bcrypt.compare(userPass, storedPass);
}

module.exports = { generateRandomPass, generate_hash, comparePasswords };
