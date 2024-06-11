import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime

cred = credentials.Certificate('firebase-key.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

def product_history(product_name, product_price, company_name, highest_price, lowest_price, current_price):
    product_data = {
        'product_title': product_name,
        'product_price': product_price,
        'search_date': datetime.now().strftime('%d-%B-%Y'),
        'search_time': datetime.now().strftime('%I:%M %p'),
        'highest_price': highest_price,
        'lowest_price': lowest_price,
        'current_price': current_price
    }
    
    # Check if company document exists
    company_ref = db.collection('products').document(company_name)
    if company_ref.get().exists:
        # Update product history
        company_ref.update({
            'product_history': firestore.ArrayUnion([product_data]),
        })
    else:
        # Create new company document and product history
        company_ref.set({
            'product_history': [product_data]
        })

def price_history(high,low,current):
    price_data = {
        'highest price': highest_price,
        'current price':current_price,
        'highest price':highest_price
    }
