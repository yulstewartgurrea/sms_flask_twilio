from flask import Flask, Response, request, jsonify, render_template, redirect, url_for
from twilio import twiml
from twilio.rest import TwilioRestClient


app = Flask(__name__)


# @app.route("/")
# def check_app():
#     # returns a simple string stating the app is working
#     return Response("It works!"), 200

# Working
# client = TwilioRestClient("AC7f30d985332a632f44940fb4867e1fac", "5f4c822069dfae2a0d7339d425196c78")
# client.messages.create(to="+639172001359", from_="+14845524889",
#                        body="testing101")

ACCOUNT_SID = "AC7f30d985332a632f44940fb4867e1fac"
AUTH_TOKEN = "5f4c822069dfae2a0d7339d425196c78"
sender = "+14845524889"
client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN)

@app.route('/')
def ReturnForm():
    return render_template('form.html')

@app.route('/', methods=['POST'])
def FormPost():
    body_message = request.form['Message']
    To = request.form['to']
    message = client.sms.messages.create(to=To, from_= sender, body=body_message)
    return render_template('success.html')

if __name__ == "__main__":
    app.run(debug=True)