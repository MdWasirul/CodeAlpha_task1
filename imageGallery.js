const fullImgContainer=document.querySelector("#fullImgContainer");
const fullImg=document.querySelector("#fullImg");

function openFullImg(pic){
    fullImgContainer.style.display="flex";
    fullImg.src=pic;
}
function closeFullImg(){
    fullImgContainer.style.display="none";

}
