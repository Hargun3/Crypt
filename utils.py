from cryptography.fernet import Fernet

def generate_key() -> bytes:
    key = Fernet.generate_key()
    return key

def encrypt(message : str, key : bytes) -> bytes:
    encoded_message = message.encode() #encoding the message of type "string" into bytes for the purposes of this library.
    f = Fernet(key)
    encrypted_message = f.encrypt(encoded_message)
    return encrypted_message

def decrypt(encrypted_message : bytes, key : bytes) -> str:
    f = Fernet(key)
    decrypted_message = f.decrypt(encrypted_message) #decrypted_message is the type bytes
    return decrypted_message.decode() # decrypted_message is being decoded as a "string" type and then returned

# By Rijul
