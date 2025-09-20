from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def convert():
    if request.method == 'GET':
        return jsonify({"message": "API is working!", "status": "success"})
    
    # For POST requests (file upload)
    return jsonify({"message": "POST request received", "status": "success"})

# Export the Flask app for Vercel
def handler(request):
    return app(request.environ, lambda *args: None)
