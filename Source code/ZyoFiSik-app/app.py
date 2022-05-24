from flask import Flask, request, jsonify, render_template, url_for
from pickle import load
with open("static/data/imgs","rb") as file:
  poseStandardImages = load(file)
app = Flask(__name__)
@app.route("/")
def index():
    return render_template('index.html')
import base64
import time
import io
import gc
from PIL import Image
import numpy as np
from threading import Thread
from modules.exercise import Exercise
exercise=Exercise()
global secondsCounter,audioData,thread
thread=True

try:
    with open("D:\.project\ZyoFiSik\server.txt") as f:
        lines=f.read()
        app.config['SERVER_NAME'] = 'localhost:5000'
except:
    app.config['SERVER_NAME'] = 'zyofisik.herokuapp.com' 



global image
ndarray = np.full((300,300,3), 0, dtype=np.uint8)
image=ndarray


def breatheIn():
    global secondsCounter,audioData
    with app.app_context():
      breatheInFilePath=url_for("static",filename="audio/breathe_in.mp3")
      audioData=open("static/audio.txt","w")
      audioData.write(breatheInFilePath)
      audioData.close()
      secondsCounter=secondsCounter+3
      time.sleep(3)
def breatheOut():
    global secondsCounter,audioData
    with app.app_context():
      breatheOutFilePath=url_for("static",filename="audio/breathe_out.mp3")
      audioData=open("static/audio.txt","w")
      audioData.write(breatheOutFilePath)
      audioData.close()
      secondsCounter=secondsCounter+3
      time.sleep(3)
def meditationStart(duartionMinutes):
    global secondsCounter,thread,audioData
    secondsCounter=0
    duartionMinutes=int(duartionMinutes)
    durationSeconds=duartionMinutes*60
    secondsCounter=secondsCounter+2
    with app.app_context():
      time.sleep(2)
      if(secondsCounter == 2):
          closeFilePath=url_for("static",filename="audio/close_eyes.mp3")
          audioData=open("static/audio.txt","w")
          audioData.write(closeFilePath)
          audioData.close()
      isTimeOut=True
      while(isTimeOut==True and thread):
        breatheIn()
        breatheOut()
        if(secondsCounter>=durationSeconds):
          isTimeOut=False
@app.route("/getAudio")
def getAudio():
    global audioData
    audioData=open("static/audio.txt","r")
    audioFilePath=audioData.read()
    audioData.close()
    return audioFilePath
@app.route("/meditation_start",methods=["POST"])
def meditationStartRequest():
    global thread
    if(request.method=="POST"):
        durationInput=request.json["minutes"]
        thread=True
        userThread=Thread(target=meditationStart,args=(durationInput,))
        userThread.start()
        return "Meditation Started"
    else:
        return"No get Method"
@app.route("/meditation_stop",methods=["POST"])
def meditationStopRequest():
    global thread
    thread=False
    return "Meditation Stopped"




def trainerFrame(exerciseCount,exerciseStage,exerciseFunction):
    global image
    exerciseStage,exerciseCount,image=exerciseFunction(image,exerciseStage,exerciseCount)
    if isinstance(image,bool):
        if(image==False):
            return(jsonify({"error":"Error occured","count":exerciseCount}))
    pillowImage = Image.fromarray(image)
    buffer = io.BytesIO()
    pillowImage.save(buffer, format="PNG")
    base64OutputImage = base64.b64encode(buffer.getvalue()).decode("utf-8")
    buffer.close()
    output={"data":base64OutputImage,"count":exerciseCount,"stage":exerciseStage}
    return (jsonify(output))
@app.route("/trainerWeb",methods=["POST"])
def trainerWeb():
    global image
    if(request.method == "POST"):
        data=request.json["data"]
        count=request.json["count"] 
        stage=request.json["stage"] 
        ex=int(request.json["ex"])
        if(ex==1):
            exerciseFunction=exercise.waiterCurl
        elif(ex==2):
            exerciseFunction=exercise.bicepCurl
        elif(ex==3):
            exerciseFunction=exercise.hammerCurl
        elif(ex==4):
            exerciseFunction=exercise.pushUp
        elif(ex==5):
            exerciseFunction=exercise.squats
        data=data.split(",")[1]
        imageData=base64.b64decode(data)
        imageBytes=Image.open(io.BytesIO(imageData))
        image=np.array(imageBytes)
        return trainerFrame(int(count),stage,exerciseFunction)



@app.route("/pose",methods=["POST"])
def standardPose():
  index = int(request.json["pose"])
  poseStandardImage = poseStandardImages[index]
  pillowImage = Image.fromarray(poseStandardImage)
  buffer = io.BytesIO()
  pillowImage.save(buffer, format="PNG")
  base64OutputStandardImage = base64.b64encode(buffer.getvalue()).decode("utf-8")
  buffer.close()
  gc.collect()
  return jsonify({"data":base64OutputStandardImage})

@app.route('/video')
def video():
    return render_template('video.html')
@app.route("/meditation")
def meditation():
    return render_template('meditation.html')
@app.route("/exercise")
def exerciseRouter():
    return render_template('exercise_main.html')

@app.route("/trainer")
def trainerRouter():
    ex=request.args.get('index')
    name=request.args.get('exercise')
    return render_template('trainer.html',ex=ex,name=name)
if __name__ == "__main__":
    app.run()
