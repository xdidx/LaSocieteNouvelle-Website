export function cutString(str, nbChar) {
  if (str.length <= nbChar) return str;
  return str.substring(0, nbChar) + "...";
}

export const getFlagLabel = (flag) => {
  switch (flag) {
    case "p":
      return "Valeur publiée";
      break;
    case "e":
      return "Valeur Estimée";
    case "r":
      return "Valeur issue d'un reporting";
    case "d":
      return "Valeur par défaut";
    default:
      return "Valeur par défaut";
      break;
  }
};
