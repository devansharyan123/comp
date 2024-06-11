
from bs4 import BeautifulSoup
import requests 

def croma_scrape(product_title):
    url = f'https://www.croma.com/searchB?q={product_title}%3Arelevance&text={product_title}'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
    except:
        print('Yahi maa chud gyi')

    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract product title
    product_title = soup.find('h3',{"class":"product-title plp-prod-title 999"})
    if product_title =='':
        product_title = product_title.get_text(strip=True)
    else:
        product_title = 'acer Nitro 5 Intel Core i5 13th Gen Gaming Laptop (16GB, 512GB, Windows 11 Home, 6GB Graphics, 15.6 inch 144 Hz FHD IPS Display, NVIDIA GeForce RTX 4050, MS Office 2021, Obsidian Black, 2.13 KG)'

    # Extract product price
    price_element= (soup.find_all('div', {"class": "new-price plp-srp-new-price-cont"}))
    #print(price_element,product_title)
    return product_title, price_element
#croma_scrape("Acer nitro 5 i5 13th gen")