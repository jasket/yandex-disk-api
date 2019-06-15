export function toHumanize(byte) {
  if (!byte) return "0";
  const stroke = (byte, type, postfix) => Math.round(byte / type) + postfix;

  const GB = 1024 * 1024 * 1024;
  if (byte > GB) return stroke(byte, GB, "GB");

  const MB = 1024 * 1024;
  if (byte > MB) return stroke(byte, MB, "MB");

  const KB = 1024;
  if (byte > KB) return stroke(byte, KB, "KB");

  return byte;
}

export function removeDiskPrefix(str) {
  return str.replace("disk:/", "");
}

export function pathStringParts(str) {
  str = str.replace("/", "");
  return str.split("/");
}

export function getCurrentPath(arr, index) {
  return arr.slice(0, index + 1).join("/");
}
