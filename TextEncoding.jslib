mergeInto(LibraryManager.library, {
  JsTextDecode: function (rawByteArrayString, charset) {
    //convert raw to string
    var byteArrayString = UTF8ToString(rawByteArrayString);
    var byteArray = byteArrayString.split(" ").map(Number);

    //decode
    var encoded = new Uint8Array(byteArray);
    const decoder = new TextDecoder(charset);
    const decoded = decoder.decode(encoded);

    //return to string
    var bufferSize = lengthBytesUTF8(decoded) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(decoded, buffer, bufferSize);
    return buffer;
  }
});