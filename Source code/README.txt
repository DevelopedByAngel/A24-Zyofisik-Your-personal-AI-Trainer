ZyoFiSik is a web aplication which is also deployed on https://zyofisik.herokuapp.com/

Follow below steps to run in local environment after unzipping the folder
 
Step 1 : Open command prompt in the root folder

Step 2 : Requirements
		- Python https://www.python.org/downloads/
		- virtual environment - pip install virtualenv

Step 3 : Run the following commands activate a virtual environment
	$ vitualenv env
	$ env\Scripts\activate.bat

Step 4 : Run the following commands to start the app managing the CNN model
	$ cd zyofisik-model
	$ pip install -r requirements.txt
	$ cd ..
	$ env\Scripts\python.exe zyofisik-model\app.py

Step 5 : Open a new comman prompt in the root folder and run the follwing commands to start the main webapp
	$ env\Scripts\activate.bat
	$ cd zyofisik-app
	$ pip install -r requirements.txt
	$ cd ..
	$ env\Scripts\python.exe zyofisik-app\app.py

Step 6: Open localhost:5000 in your browser to view the webapp