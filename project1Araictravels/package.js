document.addEventListener("DOMContentLoaded", function () {
    // Extracting the image number from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const imageNumber = parseInt(urlParams.get("image"));
  
    // Define the imageChange function to change the image based on the provided number
    function imageChange(num) {
      var locresult;
      switch (num) {
        case 1:
          imageUrl1 = "Images/tajmahal1.jpg";
          imageUrl2 = "Images/tajmahal2.jpg";
          imageUrl3 = "Images/tajmahal3.jpg";
          locresult = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227160.24139205567!2d77.66816123692982!3d27.175829674425064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2z4K6k4K6-4K6c4K-NIOCuruCuleCuvuCusuCvjQ!5e0!3m2!1sta!2sin!4v1717833470801!5m2!1sta!2sin"
          document.getElementById("amount").innerHTML = "₹2,200";
          document.getElementById("title").innerHTML = "All-Inclusive Taj Mahal Tour From Delhi Same Day";

          break;
        case 2:
          imageUrl1 = "Images/kashmire.webp";
          imageUrl2 = "Images/kashmire02.jpg";
          imageUrl3 = "Images/kashmire03.jpg";
          locresult=  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735960.4131484758!2d75.98234471987088!3d31.810075060366852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2z4K654K6_4K6u4K6-4K6a4K-N4K6a4K6y4K-NIOCuquCuv-CusOCupOCvh-CumuCuruCvjQ!5e0!3m2!1sta!2sin!4v1717834046901!5m2!1sta!2sin"
          document.getElementById("amount").innerHTML = "₹16,000";
          document.getElementById("title").innerHTML = "Srinagar: Enchanting Day Tour with Shikara Ride at Dal Lake";
          break;
        case 3:
            imageUrl1 = "Images/kashmire1.webp";
            imageUrl2 = "Images/kashmire11.jpg";
            imageUrl3 = "Images/kashmire12.jpg";
            locresult=  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735960.4131484758!2d75.98234471987088!3d31.810075060366852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2z4K654K6_4K6u4K6-4K6a4K-N4K6a4K6y4K-NIOCuquCuv-CusOCupOCvh-CumuCuruCvjQ!5e0!3m2!1sta!2sin!4v1717834046901!5m2!1sta!2sin"
            document.getElementById("amount").innerHTML = "₹6700";
            document.getElementById("title").innerHTML = "Srinagar: Private Day Tour with Shikara Ride at Dal Lake";
            break;
        case 4:
            imageUrl1 = "Images/thailand2.webp";
            imageUrl2 = "Images/bangkok1.jpg";
            imageUrl3 = "Images/bangkok2.jpg";
            locresult = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496716.4956650738!2d100.15195120629116!3d13.437215523285094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2z4K6q4K6-4K6Z4K-N4K6V4K6-4K6V4K-NLCDgrqTgrr7grq_gr43grrLgrr7grqjgr43grqTgr4E!5e0!3m2!1sta!2sin!4v1717834579162!5m2!1sta!2sin"
            document.getElementById("amount").innerHTML = "₹3340";
            document.getElementById("title").innerHTML = "Bangkok: All-Day Pass to Yunomori Sathorn Onsen Bath and Spa";
            document.getElementById("description").innerHTML="Relax and refresh before your departure, in-between flights and departures in the comfort of Coral Lounges at BKK Suvarnabhumi Airport. Use the WiFi, and enjoy delicious food and beverages, and complimentary neck and shoulder massage."
            break;
         case 5:
            imageUrl1 = "Images/himalaya1.webp";
            imageUrl2 = "Images/himalaya12.jpg";
            imageUrl3 = "Images/himalaya13.jpg";
            locresult = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713618355!2d85.28493302080203!3d27.70895425220774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2z4K6V4K6-4K6k4K-N4K6u4K6-4K6j4K-N4K6f4K-BIDQ0NjAwLCDgrqjgr4fgrqrgrr7grrLgr40!5e0!3m2!1sta!2sin!4v1717834998093!5m2!1sta!2sin"
            document.getElementById("amount").innerHTML = "₹54,000";
            document.getElementById("title").innerHTML = "Annapurna Circuit Trek 10 Days From Kathmandu";
            document.getElementById("description").innerHTML="The Annapurna Circuit Trek is a renowned trekking route in the Himalayas, encircling the Annapurna Massif in Nepal."
            break;
          case 6:
            imageUrl1 = "Images/himalaya2.webp";
            imageUrl2 = "Images/himalaya21.jpeg";
            imageUrl3 = "Images/himalaya22.jpg";
            locresult = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7056429.638276471!2d80.30012264553874!3d30.279189773297112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995b9ebef1235bd%3A0x3ae1297b70640201!2z4K6H4K6u4K6v4K6u4K6y4K-I!5e0!3m2!1sta!2sin!4v1717835198755!5m2!1sta!2sin"
            document.getElementById("amount").innerHTML = "₹54,000";
            document.getElementById("title").innerHTML = "From Pokhara : 6N-7D Annapurna Himalaya Base Camp Trek";
            document.getElementById("description").innerHTML="The Annapurna Circuit Trek is a renowned trekking route in the Himalayas, encircling the Annapurna Massif in Nepal."
            break;
          case 7:
            imageUrl1 = "Images/goa.webp";
            imageUrl2 = "Images/goa1.jpeg";
            imageUrl3 = "Images/goa2.jpg";
            locresult = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492481.2339781585!2d73.38271547088706!3d15.348861128603883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2z4K6V4K-L4K614K6-!5e0!3m2!1sta!2sin!4v1717835720853!5m2!1sta!2sin"
            document.getElementById("amount").innerHTML = "₹50,000";
            document.getElementById("title").innerHTML = "Bungy Jump in Goa - Jumpin Heights";
            document.getElementById("description").innerHTML="The Annapurna Circuit Trek is a renowned trekking route in the Himalayas, encircling the Annapurna Massif in Nepal."
            break;
        default:
            console.log("incoorect ")
      }
      var imageElement1 = document.getElementById("image1");
      imageElement1.src = imageUrl1;
      var imageElement2 = document.getElementById("image2");
      imageElement2.src = imageUrl2;
      var imageElement3 = document.getElementById("image3");
      imageElement3.src = imageUrl3; 
      var locatresult=document.getElementById("locati");
      locatresult.src=locresult;
    }
  
    // Call the imageChange function with the extracted image number
    if (!isNaN(imageNumber)) {
      imageChange(imageNumber);
    } else {
      console.log("Invalid image number");
    }
  });