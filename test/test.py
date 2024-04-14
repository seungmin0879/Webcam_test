#pip install scikit-image opencv-python
import cv2
from skimage.metrics import structural_similarity as ssim

def calculate_similarity(imageA_path, imageB_path):
    imageA = cv2.imread(imageA_path, cv2.IMREAD_GRAYSCALE)
    imageB = cv2.imread(imageB_path, cv2.IMREAD_GRAYSCALE)
    
    if imageA.shape !=imageB.shape:
        height, width = imageA.shape
        imageB = cv2.resize(imageB, imageB, (width, height))
        
    similarity_index = ssim(imageA, imageB)
    
    print(f"이미지 유사도:{similarity_index * 100:.2f}%")
    
imageA_path = '0.jpg'
imageB_path = '1.jpg'

calculate_similarity(imageA_path, imageB_path)