import requests
import geocoder

API_KEY = 'AIzaSyBYfqJspGhr-SSfdTJ-82o71Izkhe00JnI'

def cur_geo():
    latlng = [str(x) for x in geocoder.ip('me').latlng]
    return latlng[0] + ',' + latlng[1]

def get_gym_photo(photos):
    photo = str(photos[0]['html_attributions'])
    start = photo.find('"') + 1
    end = photo.rfind('"')
    return photo[start:end]

def search_gyms_by_name(name):
    location = cur_geo()
    url = ('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    'location={0}&rankby=distance&type=gym&name={1}&key={2}').format(location, name, API_KEY)
    res = requests.get(url).json()
    gyms = {}
    for r in res['results']:
        name = r['name']
        location = r['vicinity']
        if 'photos' in r:
            photo = get_gym_photo(r['photos'])
        else:
            photo = None
        gym_info = {'location': location, 'photo': photo}
        gyms.setdefault(name, gym_info)

    return gyms
