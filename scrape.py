import requests
from bs4 import BeautifulSoup
import urllib.request

def getdata(url):
  r = requests.get(url)
  return r.text

htmldata = getdata("https://us.cdgcdgcdg.com/")
soup = BeautifulSoup(htmldata, 'html.parser')
for item in soup.find_all('a'):
  if(item.img!=None):
    print('https:'+item.img['data-src'])
    split = item['href'].split("/")
    urllib.request.urlretrieve('https:'+item.img['data-src'], './images/'+split[-1]+'.png')
