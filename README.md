## MERN Image,Video and PDF Upload using multer and Cloudinary
    Many times while building full stack application,we need to upload images,
    videos and pdf files to database so that it can be accessed as per the choice of user. 
    In most cases people prefer to store it in a folder and transfer that image path to 
    database. But this causes a problem after the website is hosted on a platform like heroku.
    The Heroku filesystem is ephemeral - that means that any changes to the filesystem whilst 
    the dyno is running only last until that dyno is shut down or restarted. Each dyno boots
    with a clean copy of the filesystem from the most recent deploy. So the saved image in
    the uploads folder goes off and so the path cannot be accessed. For this reason moving 
    to a cloud platform is essential. It will also work fine after hosting on any platform.

    So for this reason, I have created a repo which shows how you can upload images,videos,pdfs 
    to cloudinary. Cloudinary has a free trial with no credit cards required. Moreover it had 
    enough storage in the free trial sufficient for your personal projects and hackathons
    (Max size of a single video should be lesser than 100mb). After uploading the video 
    through frontend it may take few seconds(5-10) to make effect. Till that time you can
    show a good pre-loader in your site!

    P.S = Initially you can upload only videos and images but you just need to submit a request
    (https://support.cloudinary.com/hc/en-us/requests/new) that you need to host pdf also for 
    free,they will give you that privilege too within 5 minutes.
    Isn't that cool! 



https://user-images.githubusercontent.com/65560026/148166454-b762f264-b449-493e-9379-32cfb9d6eb66.mp4


###  P.S : I have just shown the functionality demo here so didnot took care of frontend UI

## Run this app

- Clone this repo and run **npm install**
- goto **client** directory and run **npm install** as well
- Create **.env** file at root level and add following variables and assign their values **MONGO_URI** **CLOUDINARY_CLOUD_NAME** **CLOUDINARY_API_KEY** **CLOUDINARY_API_SECRET**
- To start the client run **npm start**
- To run the server run **nodemon index**

## Dont forget to ⭐ the repo if you like it!