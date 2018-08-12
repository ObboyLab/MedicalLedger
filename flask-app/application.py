from flask import Flask, render_template, request, redirect
import requests
import os 

app = Flask(__name__)

# Route: index page
@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')



# When running this app on the local machine, default the port to 8000
port = int(os.getenv('PORT', 5000))

# Entry point to the program
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port, debug=True)