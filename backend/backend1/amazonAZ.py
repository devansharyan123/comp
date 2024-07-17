from bs4 import BeautifulSoup
import requests

def scrape_amazon(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f'Error fetching page: {e}')
        return None, None, None

    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract product title
    product_title = soup.find('span', {'id': 'productTitle'})
    if product_title:
        product_title = product_title.get_text(strip=True)
    else:
        product_title = None

    # Extract product price
    product_price = None
    price_element = soup.find('span', {'class': 'a-price-whole'})
    if price_element:
        product_price = float(price_element.get_text(strip=True).replace(',', ''))

    # Extract product image
    product_image = None
    image_element = soup.find('img', {'id': 'landingImage'})
    if image_element:
        product_image = image_element.get('src')

    
    return product_title, product_price, product_image

# url = input("Enter the Amazon product URL: ")
# title, price, image = scrape_amazon(url)

# if title and price and image:
#     print(f"Product Title: {title}")
#     print(f"Product Price: {price}")
#     print(f"Product Image URL: {image}")
# else:
#     print("Failed to retrieve product details.")
