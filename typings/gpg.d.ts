/** Declaration file generated by dts-gen */
declare module 'gpg'
{
  export function call(stdin: any, args: any, fn: any): void;

  export function callStreaming(inputFileName: any, outputFileName: any, args: any, fn: any): void;

  export function clearsign(str: any, args: any, fn: any): void;

  export function decrypt(str: any, args: any, fn: any): void;

  export function decryptFile(file: any, fn: any): any;

  export function decryptStream(stream: any, args: any, fn: any): void;

  export function decryptToFile(options: any, fn: any): void;

  export function decryptToStream(options: any, fn: any): void;

  export function encrypt(str: any, args: any, fn: any): void;

  export function encryptFile(file: any, fn: any): any;

  export function encryptStream(stream: any, args: any, fn: any): void;

  export function encryptToFile(options: any, fn: any): void;

  export function encryptToStream(options: any, fn: any): void;

  export function importKey(keyStr: any, args: any, fn: any): any;

  export function importKeyFromFile(fileName: any, args: any, fn: any): any;

  export function removeKey(keyID: any, args: any, fn: any): void;

  export function verifySignature(str: any, args: any, fn: any): void;

  export namespace call {
    const prototype: {};
  }

  export namespace callStreaming {
    const prototype: {};
  }

  export namespace clearsign {
    const prototype: {};
  }

  export namespace decrypt {
    const prototype: {};
  }

  export namespace decryptFile {
    const prototype: {};
  }

  export namespace decryptStream {
    const prototype: {};
  }

  export namespace decryptToFile {
    const prototype: {};
  }

  export namespace decryptToStream {
    const prototype: {};
  }

  export namespace encrypt {
    const prototype: {};
  }

  export namespace encryptFile {
    const prototype: {};
  }

  export namespace encryptStream {
    const prototype: {};
  }

  export namespace encryptToFile {
    const prototype: {};
  }

  export namespace encryptToStream {
    const prototype: {};
  }

  export namespace importKey {
    const prototype: {};
  }

  export namespace importKeyFromFile {
    const prototype: {};
  }

  export namespace removeKey {
    const prototype: {};
  }

  export namespace verifySignature {
    const prototype: {};
  }
}
