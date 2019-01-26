import requests
from location import *

API_KEY = 'AIzaSyBYfqJspGhr-SSfdTJ-82o71Izkhe00JnI'

def search_gyms_by_name(name):
    if name == '':
        name = 'Gyms Near Me'
    location = cur_geo_string()
    url = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    'location={0}&rankby=distance&type=gym&name={1}&key={2}').format(location, name, API_KEY)
    res = requests.get(url).json()
    gyms = {}
    count = 0
    for r in res['results']:
        name = r['name']
        location = r['vicinity']
        photo_reference = r['photos'][0]['photo_reference'] if 'photos' in r else False
        photo = get_gym_photo(photo_reference)
        lat = r['geometry']['location']['lat']
        lng = r['geometry']['location']['lng']
        geo = str(lat) + ',' + str(lng)
        gym_info = {'name': name, 'location': location,
                    'photo': photo, 'geo': geo}
        gyms.setdefault(count, gym_info)
        count += 1
    
    return gyms

def get_gym_photo(photo_reference):
    if photo_reference == False:
        return 'https://maps.googleapis.com/maps/api/place/photo'
    url = ('https://maps.googleapis.com/maps/api/place/photo?'
    'photoreference={0}&maxheight=150&maxwidth=300&key={1}').format(photo_reference, API_KEY)
    return url

