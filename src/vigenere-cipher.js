const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyPosition = 0;
    for (let i = 0; i < upperMessage.length; i++) {
      const letterIndex = alphabet.indexOf(upperMessage[i]);
      if (letterIndex === -1) {
        result += upperMessage[i];
        continue;
      }
      const keyIndex = alphabet.indexOf(upperKey[keyPosition % upperKey.length]);
      const shiftedIndex = (letterIndex + keyIndex) % 26;
      const encryptedLetter = alphabet[shiftedIndex];
      result += encryptedLetter;
      keyPosition += 1;
    }
    if (this.direct === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let keyPosition = 0;
    for (let i = 0; i < upperMessage.length; i++) {
      const letterIndex = alphabet.indexOf(upperMessage[i]);
      if (letterIndex === -1) {
        result += upperMessage[i];
        continue;
      }
      const keyIndex = alphabet.indexOf(upperKey[keyPosition % upperKey.length]);
      const shiftedIndex = (letterIndex - keyIndex + 26) % 26;
      const encryptedLetter = alphabet[shiftedIndex];
      result += encryptedLetter;
      keyPosition += 1;
    }
    if (this.direct === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
