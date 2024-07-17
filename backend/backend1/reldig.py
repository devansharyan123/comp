import requests
from bs4 import BeautifulSoup

def reldig_scrape(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f'Error fetching page: {e}')
        return None, None

    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract the first product title
    product_title_element = soup.find('p', class_='sp__name')
    if product_title_element:
        product_title = product_title_element.get_text(strip=True)
    else:
        product_title = None

    # Extract the first product price using your specific logic
    price_element = soup.find_all('span', class_='TextWeb__Text-sc-1cyx778-0 gimCrs')
    product_price = None
    if price_element:
        for price in price_element:
            nested_spans = price.find_all('span')
            if len(nested_spans) > 2:  # Ensure there are enough spans to index
                product_price = nested_spans[2].get_text(strip=True)
                break  # Assuming we only want the first matching product's price

    print("Product Title:", product_title)
    print("Product Price:", product_price)
    return product_title, product_price

# Example usage
url = "https://www.reliancedigital.in/search?q=acer%20nitro%205%20i5:relevance"
reldig_scrape(url)
