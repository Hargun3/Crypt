from flask import Flask, render_template, request, jsonify, make_response
from .utils import *
import base64

app = Flask(__name__, template_folder = "./template",)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/encrypt')
def encrypt_page():
    return render_template("encrypt.html",)

@app.route('/decrypt')
def decrypt_page():
    return render_template("decrypt.html")

@app.route('/api/encrypt', methods = ["POST"])
def encrypt_api():
    message = request.json.get("message")
    key = generate_key() #output is in bytes
    encrypted_message = encrypt(message = message, key = key)
    key_b64 = base64.b64encode(key).decode() #converted key into base64 to represent it correctly.
    #no reason to convert this into base64. It's just that we are following the standards for storing keys.
    encrypted_b64 = base64.b64encode(encrypted_message).decode()
    #same with the encrypted message.
    return make_response(jsonify({"key" : key_b64,
                    "encrypted_message" : encrypted_b64}), 200)

@app.route('/api/decrypt', methods = ["POST"])
def decrypt_api():
    key = request.json.get("key")
    encrypted_message = request.json.get("message")

    try:
        key_b64 = base64.b64decode(key)
        encrypted_b64 = base64.b64decode(encrypted_message)
        decrypted = decrypt(encrypted_message = encrypted_b64, key = key_b64)
    except Exception as e:
        return make_response(jsonify({"error" : str(e)}), 500)
    return make_response(jsonify({"decrypted_message" : decrypted}), 200)
