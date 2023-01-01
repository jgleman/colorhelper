const HEX_REGEX = /([a-fA-F0-9]{6})/g;

export function validateHex(color: string): Boolean {
  // validate pattern
  return color.match(HEX_REGEX) ? true : false;
}
