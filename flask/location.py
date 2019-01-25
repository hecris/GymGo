import geocoder

def cur_geo():
    latlng = [str(x) for x in geocoder.ip('me').latlng]
    return latlng[0] + ',' + latlng[1]