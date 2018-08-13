from flask import Flask, render_template, request, redirect
import requests
import os 

app = Flask(__name__)

# Route: index page
@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/factory")
def factory():
    transactions = {
		"medicine": {"name": "med123", "date": "29/06/1996"}
	}
    return render_template('factory.html', title="Factory", transactions=transactions)


@app.route("/wholesaler")
def wholesaler():
    return render_template('wholesaler.html',title="Wholesaler")


@app.route("/retailer")
def retailer():
    return render_template('retailer.html', title="Retailer")

@app.route("/customer")
def customer():
    return render_template('customer.html',title="Customer")

# When running this app on the local machine, default the port to 8000
port = int(os.getenv('PORT', 5000))

# Entry point to the program
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port, debug=True)