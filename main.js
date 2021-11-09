function preload()
{

}
function setup()
{
    canvas = createCanvas(1000,600);
    canvas.position(110,300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}
function draw()
{
    image(video,150,90,640,480);
    tint(tint_color);

    fill(0,128,0)
    stroke(0,128,0)
    circle(50,50,70)

    fill(255, 0, 0)
    stroke(255, 0, 0)
    rect(85, 40, 800, 20);

    fill(0,128,0)
    stroke(0,128,0)
    circle(900,50,70)


    fill(255, 0, 0)
    stroke(255, 0, 0)
    rect(890, 85, 20, 500);

    fill(255, 0, 0)
    stroke(255, 0, 0)
    rect(45, 85, 20, 500);
}
function take_snapshot()
{
    image_name = document.getElementById("name").value;
save( image_name +   '.png');
tint_color = document.getElementById("color_name").value;
}
function apply()
{

tint_color = document.getElementById("color_name").value;
}