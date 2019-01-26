import geocoder
from math import sin, cos, sqrt, atan2, radians


def cur_geo():
    latlng = geocoder.ip('me').latlng
    return latlng
    

def latlng_to_string(latlng):
    l = [str(x) for x in latlng]
    return l[0] + ',' + l[1]


def string_to_latlng(s):
    l = [float(x) for x in s.split(',')]
    return (l[0], l[1])


def cur_geo_string():
    return latlng_to_string(cur_geo())


def distance_btwn(latlng1, latlng2):
    # approximate radius of earth in km
    R = 6371.0
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

def distance_btwn_user(gymlatlng):
    if gymlatlng == False:
        return 'Not a valid geo'
    me = cur_geo()
    gymlatlng = string_to_latlng(gymlatlng)
    return distance_btwn(me, gymlatlng)