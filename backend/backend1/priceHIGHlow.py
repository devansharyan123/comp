from bs4 import BeautifulSoup
import requests 
from database import price_history


def price_sccrape(product_title):
    url = f'https://www.pricebefore.com/{product_title[0:7]}-p717345.html'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    response = requests.get(url, headers=headers)
    response.raise_for_status()

    soup = BeautifulSoup(response.content, 'html.parser')

    item_div = soup.find_all('div',{"class":"section"})
    #print(item_div)
    for item_divs in item_div:
     lowest_price = item_divs.find_all('div')[5].get_text().replace('₹','').replace(",",'')
     lowest_price = float(lowest_price)
     highest_price = float(item_divs.find_all('div')[8].get_text().replace('₹','').replace(",",''))

    current_price = float(soup.find('div',{"class":"js-product-price"}).get_text().replace('₹','').replace(",",''))
    print(f"highest price:{highest_price}\nCurrent price:{current_price}\nLowest price:{lowest_price}")
    return highest_price, lowest_price, current_price














#     # Extract product title
#     product_title_element = soup.find('h3',{"class":"product-title plp-prod-title 999"})
#     for x in product_title_element.find_all('a'):
#         print(x)
#     if product_title =='':
#         product_title = product_title.get_text(strip=True)
#     else:
#         product_title = 'acer Nitro 5 Intel Core i5 13th Gen Gaming Laptop (16GB, 512GB, Windows 11 Home, 6GB Graphics, 15.6 inch 144 Hz FHD IPS Display, NVIDIA GeForce RTX 4050, MS Office 2021, Obsidian Black, 2.13 KG)'

#     # Extract product price
#     price_element= (soup.find_all('div', {"class": "new-price plp-srp-new-price-cont"}))
#     #product_price = float(price_element).replace(',','')
#     #print(price_element,product_title_element)
#     return product_title, price_element
# croma_scrape('acer nitro 5 i5')