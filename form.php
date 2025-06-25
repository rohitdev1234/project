<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="form.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<br>
<h2>STUDENT FORM</h2>
<br>
 <form action=""> 

        <label for="name">  NAME :</label>
      <input type="text" id="name">
       <br>
       <br>
       PHONE NO : <input type="number">
       <br>
       <br>
       EMAIL :<input type="email">
       <br>
       <br> 
       ROLL NO: <input type="roll no">
       <br>
       <br>
      
        <label for="course">  COURSE:</label>
             <input type="text" id="course">
       <br>
       <br>
       DOB: <input type="number">
       <br>
       <br>

       <label><strong>Gender:</strong></label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <br/><br/>

    <label><strong>Hobbies:</strong></label>
    <input type="checkbox" id="reading" name="hobbies" value="reading">
    <label for="reading">Reading</label>
    <input type="checkbox" id="traveling" name="hobbies" value="traveling">
    <label for="traveling">Traveling</label>
    <input type="checkbox" id="sports" name="hobbies" value="sports">
    <label for="sports">Sports</label>
    <br/><br/>

    <p>Choose your favorite Web language:</p>
    <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
<br><br>

       <button>submit</button>





  </form>




    
</body>
</html>  -->


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styled Contact Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color:rgb(120, 150, 196);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .form-container {
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }


    .form-container h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 6px;
      color: #555;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
    }

    .form-group textarea {
      resize: vertical;
      height: 100px;
    }

    .form-group button {
      width: 100%;
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 12px;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .form-group button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <div class="form-container">
    <h2>STUDENT FORM</h2>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>


    <div class="form-group">
        <label for="rollno">Rollno</label>
        <input type="rollno" id="rollno" name="rollno" required />
</div> 


      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <div class="form-group">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  </div>


</body>
</html>
