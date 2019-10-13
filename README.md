# GymGo
#### Concept
GymGo is a mobile app that allows users to check-in to gyms based on their location and earn points to purchase fitness items. GymGo was created for Daedalus Codefest 2018 using React Native and Flask.

<p align="center">
<img src="https://github.com/hecris/GymGo/raw/master/screenshots/homescreen_resize.png" />
</p>

#### Run Instructions
1) `git clone https://github.com/hecris/GymGo.git`

2) Get the Flask app running
```
cd backend
pip -m venv env  
source env/bin/activate
pip install -r requirements.txt
python3 app.py 
```
Note: You need a Google Maps API Key, insert that into gym.py

3) Get the React Native app running. Open a new window and run the following commands
```
cd ../frontend
npm install
npx localtunnel --port {the port which the Flask app is running on}
```
This will output a URL to your backend, paste that into API_URL.js Finally, run
```
npm start
```
