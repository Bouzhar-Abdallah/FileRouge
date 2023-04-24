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

export const getRandomSquad = (players) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const filterAndShuffle = (array, position) => {
    const filtered = array.filter(player => player.poste.name === position);
    shuffleArray(filtered);
    return filtered;
  };

  const goalkeepers = filterAndShuffle(players, 'Goalkeeper').slice(0, 2);
  const defenders = filterAndShuffle(players, 'Defender').slice(0, 5);
  const midfielders = filterAndShuffle(players, 'Midfielder').slice(0, 5);
  const forwards = filterAndShuffle(players, 'Forward').slice(0, 4);

  return [...goalkeepers, ...defenders, ...midfielders, ...forwards];
};

// covert create_at date to a readable format
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
}