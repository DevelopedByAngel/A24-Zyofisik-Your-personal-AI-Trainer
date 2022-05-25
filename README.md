# Batch A24 

# Project Title

<a href="https://zyofisik.herokuapp.com/">ZyoFiSik - Your perosonal AI fitness trainer</a>


# About the Project
The main goal of our project is to develop an interactive web application that has three main modules, namely The Yoga Assistant module, The Exercise Trainer module, and The Meditation Module.

The Yoga Assistant module uses a webcam to recognize the user's yoga and exercise poses and estimates each pose to assist the user practicing those postures to infer whether or not practiced effectively. In the Meditation Module the user specifies the duration of the meditation. The module provides meditation commands for the time set by the user. 
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

Hardware Requirements

```
Processor - Intel core i3
RAM (Random Access memory) - 3GB Storage - 2.3GB
Network (Ethernet or Wi-Fi) - 2-5Mbps

```
Software Requirements

```
Operating System - Windows 10
Heroku
```
Modules Used

```
Flask - 2.1.1
Flask-Cors - 3.0.10
gunicorn - 20.1.0
Jinja2 - 3.1.1
keras - 2.8.0
mediapipe - 0.8.9.1
numpy - 1.22.3
opencv-python-headless - 4.5.5.64
Pillow - 9.1.0
tensorflow-cpu - 2.8.0
```



### Installation

WEBSITE

Follow below steps to run in  after extracting from the folder
 
Step 1 : Open command prompt in the root folder

Step 2 : Requirements
- Download Python from https://www.python.org/downloads/
- If virtual environment is not installed run the following commmand ``` pip install virtualenv ```
- Create a virtual environment by running below command ``` virtualenv env ```

Step 3 : Run the following commands activate a virtual environment

```
vitualenv env
env\Scripts\activate.bat
```
Step 4 : Run the following commands to start the app managing the CNN model
```
cd zyofisik-model
pip install -r requirements.txt
cd ..
env\Scripts\python.exe zyofisik-model\app.py
```
Step 5 : Open a new command prompt in the root folder and run the follwing commands to start the main webapp
```
env\Scripts\activate.bat
cd zyofisik-app
pip install -r requirements.txt
cd ..
env\Scripts\python.exe zyofisik-app\app.py
```

Step 6: Open http://localhost:5000 in your browser to view the webapp



## Functionality of Modules 

### Meditation Coach
- Enter the duration in the input field provided
- Click Start button to receive the commands
- Click Stop button to stop the commands before time ends

### Exercise Trainer
- Select the exercise to perform from provided 5 exercises
- Read through the steps provided or watch the tutorial to get help on performing the exercise
- Click on Next button to move to next tab
- Click on Start button to start the processing
- Provide camera permission if asked
- Do the exercises before the webcam. Ensure a stick figure is drawn in the image shown in the webpage
- You can check the count in the left side of the page and position in the displayed image

### Yoga Assistant
- Select the yoga to perform from provided 82 asanas or click random.
- Watch the tutorial to get help on performing the asana
- Click on Start button to start the processing
- Provide camera permission if asked
- Do the asana before the webcam. Ensure a stick figure is drawn in the image shown in the webpage
- You can check the accuracy and the asana name below the image.

## Built With

* Python - For server side programming
* Flask - Python web framework
* HTML5, CSS3 - For Web Designing
* JavaScript - For Scripting
* JQuery - Used to generate Animation Effect
* Heroku - for cloud deployment



## Contact

* Angel F 
  - Register Number: 211418104020

* Bairavi B 
  - Register Number: 211418104033

* Jey Sneha A 
  - Register Number: 211418104101
