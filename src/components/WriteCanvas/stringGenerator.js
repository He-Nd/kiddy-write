export default function generateString() {
  const alphabet = "ABCDEFGHJKLMNOPQRSTUVWXYZ";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
