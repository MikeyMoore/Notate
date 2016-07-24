# Notate
- The chess notation app.  Can only be used in conjunction with phone stand.

## Members
- Q: Mikey Moore 
- N: Abid Ramay 
- R: Sam Heinz
- B: Justin Wong

## Stack
- MySQL/Firebase
- Django
- React Native
- Python (+ OpenCV)

# Feature Roadmap
### (note that level of importance for all features in iteration 1 are rated High as this represents our MVP)

## Taking a photo with React Native application
- Level of importance: High
- Status: Complete
- Must gain access to iPhone camera utilizing React Native
- User needs this feature to take a photo after every turn
- Photo must save to the phone's camera roll

## Viewing notation with React Native application
- Level of importance: High
- Status: In Progress
- User must be able to view the chess notation of the game from the app once the game has ended

## End the game with the React Native application
- Level of importance: High
- Status: Not Started
- User must be able to end their game to force the Django backend to process their game and send the chess notation results to the React Native application

## Sending a photo to Firebase from React Native application
- Level of importance: High
- Status: In Research
- Must send a photo to Firebase utilizing React Native application
- Firebase must receive a photo from React Native application

## Finding movement with OpenCV
- Level of importance: High
- Status: Complete
- Program must be able to compare to images and return an image that represents the movement

## Returning coordinates of start and end points of movement in a digestable format
- Level of importance: High
- Status: In Progress 
- Python program must return the starting and ending coordinates 

## Python algorithm to generate chess notation
- Level of importance: High
- Status: In Progress
- Python program must be able to accept coordinates sent to it and return the chess notation for the move

## Django skeleton 
- Level of importance: High
- Status: Complete
- Must have a Django backend skeleton that will be able to hold the Python algorithm and OpenCV logic as well as communicating with Firebase and the React Native application

## Django communication with Firebase
- Level of importance: High
- Status: In research
- Django backend must be able to receive information from Firebase

## Django communication with React Native application
- Level of importance: High
- Status: In research
- Django backend must be able to send info to React Native application

## React Native application communication with Django backend
- Level of importance: High
- Status: In research
- Application must be able to notify the Django app that the game has ended

## Firebase communication with Django
- Level of importance: High
- Status: In research
- Django backend must be able to receive information from Firebase

