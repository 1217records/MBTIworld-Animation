from PIL import Image
import sys

def crop_and_transparent(input_path, output_path):
    try:
        # Open image and ensure RGBA
        img = Image.open(input_path).convert("RGBA")
        width, height = img.size
        
        # We know the image is 1024x1024. The globe is exactly in the center.
        # Let's find the bounding box of the non-background.
        # The background is a solid color #16324f on the corners.
        
        # Better approach: Just create a circular mask
        center_x, center_y = width // 2, height // 2
        # Eyeballed radius of the globe itself (without the wide glow)
        radius = 420 
        
        # We want to crop it to the bounding box of the radius to make it "bigger"
        box = (center_x - radius, center_y - radius, center_x + radius, center_y + radius)
        cropped = img.crop(box)
        
        # Now apply circular mask to make outside transparent
        datas = cropped.getdata()
        newData = []
        c_width, c_height = cropped.size
        c_x, c_y = c_width // 2, c_height // 2
        
        for y in range(c_height):
            for x in range(c_width):
                dist = ((x - c_x) ** 2 + (y - c_y) ** 2) ** 0.5
                if dist > radius:
                    newData.append((255, 255, 255, 0)) # Transparent
                else:
                    newData.append(datas[x + y * c_width])
                    
        cropped.putdata(newData)
        cropped.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

crop_and_transparent(sys.argv[1], sys.argv[2])
