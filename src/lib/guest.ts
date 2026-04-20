// Thuật toán: Encode UTF-8 sang Base64 URL Safe

export function decodeGuest(encodedParam: string): string | null {
  if (!encodedParam) return null;
  try {
    let b64 = encodedParam.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    
    if (typeof window !== 'undefined') {
      return decodeURIComponent(escape(window.atob(b64)));
    } else {
      return Buffer.from(b64, 'base64').toString('utf-8');
    }
  } catch (error) {
    return null;
  }
}

export function encodeGuest(name: string): string {
  if (!name) return "";
  let b64 = '';
  if (typeof window !== 'undefined') {
      b64 = window.btoa(unescape(encodeURIComponent(name)));
  } else {
      b64 = Buffer.from(name, 'utf-8').toString('base64');
  }
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
