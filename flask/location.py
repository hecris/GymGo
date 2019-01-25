import geocoder
from math import sin, cos, sqrt, atan2, radians


def cur_geo():
    latlng = geocoder.ip('me')
    return latlng


def latlng_string(latlng):
    latlng = [str(x) for x in geocoder.ip('me').latlng]
    return latlng[0] + ',' + latlng[1]


def cur_geo_string():
    return latlng_string(cur_geo())


def distance_btwn(latlng1, latlng2):
    # approximate radius of earth in km
    R = 6373.0
    lat1 = radians(latlng1[0])
    lon1 = radians(latlng1[1])
    lat2 = radians(latlng2[0])
    lon2 = radians(latlng2[1])

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance
