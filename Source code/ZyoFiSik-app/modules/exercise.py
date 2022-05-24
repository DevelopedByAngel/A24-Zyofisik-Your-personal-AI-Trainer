import cv2
import mediapipe as mp
import numpy as np
import gc
import math
class Exercise():
    def __init__(self):
        self.mp_drawing  = mp.solutions.drawing_utils
        self.mp_pose = mp.solutions.pose
    def bicepCurl(self,image,stage=None,counter=0):
            try:
                image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
                with self.mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as self.pose_model:
                    results = self.pose_model.process(image)
                    landmarks = results.pose_landmarks.landmark
                    
                shoulder = [landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
                elbow = [landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
                wrist = [landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].y]
                angle = self.calculateAngle(shoulder, elbow, wrist)
                image.flags.writeable = True
                image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

                self.mp_drawing.draw_landmarks(image, results.pose_landmarks, self.mp_pose.POSE_CONNECTIONS,
                                    self.mp_drawing.DrawingSpec(color=(245,117,66), thickness=2, circle_radius=2),
                                    self.mp_drawing.DrawingSpec(color=(245,66,230), thickness=2, circle_radius=2)
                                    )  

                cv2.putText(image, str(angle), 
                            tuple(np.multiply(elbow, [640, 480]).astype(int)), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA
                                    )
                if angle > 160:
                    stage = "down"
                if angle < 30 and stage =='down':
                    stage="up"
                    counter +=1
                cv2.rectangle(image, (0,0), (70,50), (245,117,16), -1)
                cv2.putText(image, 'STAGE', (10,12), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.3, (0,0,0), 1, cv2.LINE_AA)
                cv2.putText(image, stage, 
                        (5,40), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2, cv2.LINE_AA)
            except Exception as exp:
                print(exp)
                pass
            return stage,counter,image
    def squats(self,image,stage=None,counter=0):
        try:
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            with self.mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as self.pose_model:
                results = self.pose_model.process(image)
                landmarks = results.pose_landmarks.landmark
                
            hip = [landmarks[self.mp_pose.PoseLandmark.RIGHT_HIP.value].x,landmarks[self.mp_pose.PoseLandmark.RIGHT_HIP.value].y]
            knee = [landmarks[self.mp_pose.PoseLandmark.RIGHT_KNEE.value].x,landmarks[self.mp_pose.PoseLandmark.RIGHT_KNEE.value].y]
            ankle = [landmarks[self.mp_pose.PoseLandmark.RIGHT_ANKLE.value].x,landmarks[self.mp_pose.PoseLandmark.RIGHT_ANKLE.value].y]  
            angle = self.calculateAngle(hip,knee,ankle)
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            self.mp_drawing.draw_landmarks(image, results.pose_landmarks, self.mp_pose.POSE_CONNECTIONS,
                                self.mp_drawing.DrawingSpec(color=(245,117,66), thickness=2, circle_radius=2),
                                self.mp_drawing.DrawingSpec(color=(245,66,230), thickness=2, circle_radius=2)
                                )  

            cv2.putText(image, str(angle),
                        tuple(np.multiply(knee, [640, 480]).astype(int)),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA
                            )
            if angle > 170 and angle<190:
                stage = "stand"
            if (angle >210 and angle<270)  or (angle >90 and angle<150) and stage =='stand':
                stage="situp"
                counter +=1
            cv2.rectangle(image, (0,0), (70,50), (245,117,16), -1)
            cv2.putText(image, 'STAGE', (10,12), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.3, (0,0,0), 1, cv2.LINE_AA)
            cv2.putText(image, stage, 
                    (5,40), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2, cv2.LINE_AA)
        except Exception as exp:
            print(exp)
            pass
        return stage,counter,image
    def pushUp(self,image,stage=None,counter=0):
        try:
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            with self.mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as self.pose_model:
                results = self.pose_model.process(image)
                landmarks = results.pose_landmarks.landmark
                
            shoulder = [landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
            elbow = [landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
            wrist = [landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].y]
            angle = self.calculateAngle(shoulder, elbow, wrist)
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            self.mp_drawing.draw_landmarks(image, results.pose_landmarks, self.mp_pose.POSE_CONNECTIONS,
                                self.mp_drawing.DrawingSpec(color=(245,117,66), thickness=2, circle_radius=2),
                                self.mp_drawing.DrawingSpec(color=(245,66,230), thickness=2, circle_radius=2)
                                )  

            cv2.putText(image, str(angle), 
                        tuple(np.multiply(elbow, [640, 480]).astype(int)), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA
                                )
            print(angle)
            if angle > 160:
                stage = "up"
            if angle < 50 and stage =='up':
                stage="down"
                counter +=1
            cv2.rectangle(image, (0,0), (70,50), (245,117,16), -1)
            cv2.putText(image, 'STAGE', (10,12), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.3, (0,0,0), 1, cv2.LINE_AA)
            cv2.putText(image, stage, 
                    (5,40), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2, cv2.LINE_AA)
        except Exception as exp:
            print(exp)
            pass
        return stage,counter,image
    def hammerCurl(self,image,stage=None,counter=0):
        try:
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            with self.mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as self.pose_model:
                results = self.pose_model.process(image)
                landmarks = results.pose_landmarks.landmark
                
            shoulder = [landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
            elbow = [landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
            wrist = [landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].y]
            angle = self.calculateAngle(shoulder, elbow, wrist)
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            self.mp_drawing.draw_landmarks(image, results.pose_landmarks, self.mp_pose.POSE_CONNECTIONS,
                                self.mp_drawing.DrawingSpec(color=(245,117,66), thickness=2, circle_radius=2),
                                self.mp_drawing.DrawingSpec(color=(245,66,230), thickness=2, circle_radius=2)
                                )  

            cv2.putText(image, str(angle), 
                        tuple(np.multiply(elbow, [640, 480]).astype(int)), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA
                                )
            if angle > 174:
                stage = "down"
            if angle < 17 and stage == 'down':
                stage = "up"
                counter += 1
            cv2.rectangle(image, (0,0), (70,50), (245,117,16), -1)
            cv2.putText(image, 'STAGE', (10,12), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.3, (0,0,0), 1, cv2.LINE_AA)
            cv2.putText(image, stage, 
                    (5,40), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2, cv2.LINE_AA)
        except Exception as exp:
            print(exp)
            pass
        return stage,counter,image
    def waiterCurl(self,image,stage=None,counter=0):
        try:
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            with self.mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as self.pose_model:
                results = self.pose_model.process(image)
                landmarks = results.pose_landmarks.landmark
                
            leftShoulder = [landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
            leftElbow = [landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
            leftWrist = [landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].x,landmarks[self.mp_pose.PoseLandmark.LEFT_WRIST.value].y]
            rightWrist = [landmarks[self.mp_pose.PoseLandmark.RIGHT_WRIST.value].x,landmarks[self.mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
            angle = self.calculateAngle(leftShoulder, leftElbow, leftWrist)
            distance = self.calculateDistance(leftWrist,rightWrist)
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            self.mp_drawing.draw_landmarks(image, results.pose_landmarks, self.mp_pose.POSE_CONNECTIONS,
                                self.mp_drawing.DrawingSpec(color=(245,117,66), thickness=2, circle_radius=2),
                                self.mp_drawing.DrawingSpec(color=(245,66,230), thickness=2, circle_radius=2)
                                )  

            cv2.putText(image, str(angle), 
                        tuple(np.multiply(leftElbow, [640, 480]).astype(int)), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA
                                )
            if distance>=0 and distance<=0.25:
                if angle > 160:
                    stage = "down"
                if angle < 30 and stage == 'down':
                    stage = "up"
                    counter += 1
            cv2.rectangle(image, (0,0), (70,50), (245,117,16), -1)
            cv2.putText(image, 'STAGE', (10,12), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.3, (0,0,0), 1, cv2.LINE_AA)
            cv2.putText(image, stage, 
                    (5,40), 
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2, cv2.LINE_AA)
        except Exception as e:
            print(e)
            pass
        return stage,counter,image
    def calculateAngle(self,shoulder,elbow,wrist):
        shoulder = np.array(shoulder)#first
        elbow = np.array(elbow)#mid
        wrist = np.array(wrist)#end
        
        radians = np.arctan2(wrist[1]-elbow[1],wrist[0]-elbow[0]) - np.arctan2(shoulder[1]-elbow[1],shoulder[0]-elbow[0])
        angle = np.abs(radians*180.0/np.pi)
        
        if angle > 180.0:
            angle = 360-angle
            
        return angle
    def calculateDistance(self,leftWrist,rightWrist):    
        squareOfComponentsInX= (rightWrist[0]-leftWrist[0])**2
        squareOfComponentsInY= (rightWrist[1]-leftWrist[1])**2
        sumOfComponents = squareOfComponentsInX+squareOfComponentsInY
        distance= math.sqrt(sumOfComponents)
        return distance