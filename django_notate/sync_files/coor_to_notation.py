from img_process_runner import getCoordinates 
import argparse
import sys

coordinates = []

if __name__ == "__main__":
	ap = argparse.ArgumentParser()
	ap.add_argument("-n", "--new", type=int, default=-1,
		help="whether or not the new order points should should be used")
	args = vars(ap.parse_args())
	print args
	getCoordinates('IMG_0141.jpg','IMG_0142.jpg', args['new'])
