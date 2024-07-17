from flask import Flask, request, jsonify
from flask_cors import CORS
from amazonAZ import scrape_amazon
from database import product_history
from notification import email_notification
from flipkart import extract_product_name, flipkart_scrape
from reldig import reldig_scrape
from dataTrackk import save_price_to_json
from priceHIGHlow import price_sccrape

app = Flask(__name__)
CORS(app, resources={r'/': {'origins': ['*']}})

@app.route('/', methods=['POST'])
def main():
    data = request.json
    if not data or 'url' not in data or 'budget' not in data:
        return jsonify({'error': 'Missing url or budget'}), 400
    
    url = data['url']
    budget = data['budget']
    user_email = data['email']
    product_title, product_price, product_image= scrape_amazon(url)
    if product_title:
        highest_price, lowest_price, current_price = price_sccrape(product_title=product_title)
        fproduct_title, fproduct_price, flipkart_url = extract_product_name(url)  # extract from Flipkart
        rproduct_title, rproduct_price, reldig_url = reldig_scrape(product_title)
        # Store product history and save to JSON
        product_history(product_title, product_price, company_name='Amazon', highest_price=highest_price, lowest_price=lowest_price, current_price=current_price)
        save_price_to_json(company_name='Amazon', product_title=product_title, product_price=product_price)

        product_history(fproduct_title, fproduct_price, company_name='Flipkart', highest_price=highest_price, lowest_price=lowest_price, current_price=fproduct_price)
        save_price_to_json(company_name='Flipkart', product_title=fproduct_title, product_price=fproduct_price)

        product_history(rproduct_title, rproduct_price, company_name='Reliance Digital', highest_price=highest_price, lowest_price=lowest_price, current_price=fproduct_price)
        save_price_to_json(company_name='Reliance Digital', product_title=fproduct_title, product_price=fproduct_price)        

        response_data = {
            'product_title': product_title,
            'product_price': product_price,
            'highest_price': highest_price,
            'lowest_price': lowest_price,
            'current_price': current_price,
            'prouct_image': product_image,
            'message': '',
            'f_title':fproduct_title,
            'f_price': fproduct_price,
            'r_title': rproduct_title,
            'r_price': rproduct_price,
            'amazon_url': url,
            'flipkart_url':flipkart_url,
            'reldig_url': reldig_url
        
        }
        print(response_data)
        # Check if the product price is within the budget
        if float(product_price) <= float(budget):
            email_notification(url,user_email)
            response_data['message'] = 'This product is within your budget.Check your mail for more info'
        else:
            response_data['message'] = 'Product not in budget.'
        
        return jsonify(response_data)
    else:
        return jsonify({'error': 'Could not retrieve product details.'}), 500

if __name__ == '__main__':
    app.run(debug=True)

# Test URL: https://www.amazon.in/Acer-i5-12500H-Processor-15-6-inch-AN515-58/dp/B09X79JDC5/
