from flask import Flask, request, jsonify, make_response
from gym import *

app = Flask(__name__)

@app.route('/gymsearch', methods=['GET'])
def gymsearch():
    name = request.args.get('name', False)
    return jsonify(search_gyms_by_name(name))

@app.route('/distancetogym', methods=['GET'])
def distancetogym():
    gymlatlng = request.args.get('gymlatlng', False)
    return str(distance_btwn_user(gymlatlng))
    
if __name__ == '__main__':
    app.run(debug = True)
