function convertToRoman(num) {
  let digitsArr = num.toString().split("");
  digitsArr = digitsArr.map(char => parseInt(char));
  console.log(digitsArr);

  function parseUnits(digit) {
    switch (digit) {
      case 1:
        return "I";
        break;
      case 2:
        return "II";
        break;
      case 3:
        return "III";
        break;
      case 4:
        return "IV";
        break;
      case 5:
        return "V";
        break;
      case 6:
        return "VI";
        break;
      case 7:
        return "VII";
        break;
      case 8:
        return "VIII";
        break;
      case 9:
        return "IX";
        break;
      case 0:
        return "";
        break;
      default:
        return undefined;
        break;
    }
  }

  function parseTens(digit) {
    switch (digit) {
      case 0:
        return "";
        break;
      case 1:
        return "X";
        break;
      case 2:
        return "XX";
        break;
      case 3:
        return "XXX";
        break;
      case 4:
        return "XL";
        break;
      case 5:
        return "L";
        break;
      case 6:
        return "LX";
        break;
      case 7:
        return "LXX";
        break;
      case 8:
        return "LXXX";
        break;
      case 9:
        return "XC";
        break;
      default:
        return undefined;
        break;
    }
  }

  function parseHundreds(digit) {
    switch (digit) {
      case 0:
        return "";
        break;
      case 1:
        return "C";
        break;
      case 2:
        return "CC";
        break;
      case 3:
        return "CCC";
        break;
      case 4:
        return "CD";
        break;
      case 5:
        return "D";
        break;
      case 6:
        return "DC";
        break;
      case 7:
        return "DCC";
        break;
      case 8:
        return "DCCC";
        break;
      case 9:
        return "CM";
        break;
      default:
        return undefined;
        break;
    }
  }

  function parseThousands(digit) {
    switch (digit) {
      case 1:
        return "M";
        break;
      case 2:
        return "MM";
        break;
      case 3:
        return "MMM";
        break;
      default:
        return undefined;
        break;
    }
  }

  switch (digitsArr.length) {
    case 1:
      return parseUnits(digitsArr[0]);
      break;
    case 2:
      return parseTens(digitsArr[0]) + parseUnits(digitsArr[1]);
      break;
    case 3:
      return (
        parseHundreds(digitsArr[0]) +
        parseTens(digitsArr[1]) +
        parseUnits(digitsArr[2])
      );
      break;
    case 4:
      return (
        parseThousands(digitsArr[0]) +
        parseHundreds(digitsArr[1]) +
        parseTens(digitsArr[2]) +
        parseUnits(digitsArr[3])
      );
      break;
    default:
      return undefined;
      break;
  }
}

console.log(convertToRoman(3482));
