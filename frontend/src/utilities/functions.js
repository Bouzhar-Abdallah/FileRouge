import CryptoJS from "crypto-js";
export const calculateTotaleValue = (players) => {
  let totalPrice = 0;
  for (let i = 0; i < players.length; i++) {
    totalPrice += players[i].price;
  }
  return totalPrice;
};

export const encryptData = (object, passphrase= "jhd") => {
  const plaintext = JSON.stringify(object);
  const encrypted = CryptoJS.AES.encrypt(plaintext, passphrase);
  localStorage.setItem("creds", encrypted.toString());
};

export const decryptData = ( passphrase= "jhd") => {
  const ciphertext = localStorage.getItem("creds");
  if (ciphertext !== null) {
    const decrypted = CryptoJS.AES.decrypt(ciphertext, passphrase);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  }else{
    return {"token":null,"user":null};
  }
};

export const getBgColor = (posteName) => {
  switch (posteName) {
    case "Goalkeeper":
      return { d: "border-l-black", e: "from-gray-300" };
    case "Defender":
      return { d: "border-l-blue-700", e: "from-blue-200" };
    case "Midfielder":
      return { d: "border-l-green-700", e: "from-green-200" };
    case "Forward":
      return { d: "border-l-red-700", e: "from-red-200" };
    default:
      return "bg-gray-100";
  }
}