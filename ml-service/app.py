from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)

CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    supports_credentials=True,
    allow_headers=["Content-Type", "Authorization"],
    methods=["GET", "POST", "OPTIONS"]
)
@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    return response

# Load model and encoders
model = joblib.load("model.pkl")
encoders = joblib.load("encoders.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    df = pd.DataFrame([{
        "Gender": data["gender"],
        "Married": data["married"],
        "Dependents": data["dependents"],
        "Education": data["education"],
        "Self_Employed": data["self_employed"],
        "Applicant_Income": float(data["applicant_income"]),
        "Coapplicant_Income": float(data["coapplicant_income"]),
        "Loan_Amount": float(data["loan_amount"]),
        "Loan_Amount_Term": float(data["loan_amount_term"]),
        "Credit_History": float(data["credit_history"]),
        "Property_Area": data["property_area"]
    }])

    # Apply stored encoders
    for col, encoder in encoders.items():
        if col in df.columns:
            df[col] = encoder.transform(df[col])

    prediction = model.predict(df)[0]
    result = "Approved" if prediction == 1 else "Rejected"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(port=5001)
