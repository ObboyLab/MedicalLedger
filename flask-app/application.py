from flask import Flask, render_template, request, redirect
import requests
import os 
import random 
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


@app.route("/submitMedicine", methods=['POST',  'GET'])
def submitMedicine():
    
    random_val = str(random.randint(1,9999))
    json_val = {
	  "$class": "org.mediledger.Medicine",
	  "medicineId": random_val,
	  "timestamp": request.form['timestamp'].lower().encode("utf-8"),
	  "date": request.form['date'].lower().encode("utf-8"),
	  "state": request.form['state'].lower().encode("utf-8"),
	  "owner": "resource:org.mediledger.Entity#" + request.form['company_name']
	}
    r = requests.post('http://localhost:3000/api/Medicine', data = json_val)
    
    return("The status code of the POST is : " + str(r.status_code)+" , " + str(r.text))

@app.route("/changeOwner/<owner>", methods=['POST','GET'])
def changeOwner(owner):
    return owner
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